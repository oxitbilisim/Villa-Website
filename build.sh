#!/usr/bin/env bash
set -Eeuo pipefail

# Production Docker build/deploy helper for villa-fe.
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

usage() {
  cat <<'USAGE'
Usage: bash build.sh [version] [options]

  --build-only          Build the image without deploying
  --no-logs             Skip background Compose log capture
  --service NAME        Compose service (default: villa-fe)
  --image NAME          Docker image (default: villa-fe)
  --compose-file FILE   Compose file (default: auto-detect)
  -h, --help            Show help

Optional environment files: .env, .env.production, .env.production.local (last wins).
Default backend: https://ik-be.oxitik.com.tr
Version defaults to DEFAULT_VERSION or 1.0.0. CLI options override env files.
USAGE
}

log() { printf '[%s] %s\n' "$(date '+%Y-%m-%d %H:%M:%S')" "$*"; }
fail() { printf '[ERROR] %s\n' "$*" >&2; exit 1; }
trap 'printf "[ERROR] Build/deploy failed at line %s.\n" "$LINENO" >&2' ERR

# Help must work without Docker or local configuration.
for arg in "$@"; do
  if [[ "$arg" == '-h' || "$arg" == '--help' ]]; then usage; exit 0; fi
done

for file in .env .env.production .env.production.local; do
  if [[ -f "$file" ]]; then
    log "Loading environment from $file"
    set -a
    # These are trusted, shell-compatible local configuration files.
    # shellcheck disable=SC1090
    source "$file"
    set +a
  fi
done

export REACT_APP_API_ENDPOINT="${REACT_APP_API_ENDPOINT:-https://ik-be.oxitik.com.tr}"

VERSION="${DEFAULT_VERSION:-1.0.0}"
IMAGE_NAME="${IMAGE_NAME:-villa-fe}"
SERVICE_NAME="${SERVICE_NAME:-villa-fe}"
COMPOSE_FILE="${COMPOSE_FILE:-}"
BUILD_ONLY=false
FOLLOW_LOGS=true

if [[ -n "${1:-}" && "$1" != -* ]]; then VERSION="$1"; shift; fi
while [[ $# -gt 0 ]]; do
  case "$1" in
    --build-only) BUILD_ONLY=true; shift ;;
    --no-logs) FOLLOW_LOGS=false; shift ;;
    --service|--image|--compose-file)
      [[ -n "${2:-}" && "$2" != -* ]] || fail "$1 requires a value"
      case "$1" in
        --service) SERVICE_NAME="$2" ;;
        --image) IMAGE_NAME="$2" ;;
        --compose-file) COMPOSE_FILE="$2" ;;
      esac
      shift 2
      ;;
    *) fail "Unknown option: $1" ;;
  esac
done

[[ "$VERSION" =~ ^[a-zA-Z0-9_][a-zA-Z0-9_.-]{0,127}$ ]] || fail "Invalid Docker version tag: $VERSION"
[[ "$REACT_APP_API_ENDPOINT" =~ ^https?://[^[:space:]]+$ ]] || fail 'Set REACT_APP_API_ENDPOINT to the backend HTTP(S) URL'
command -v docker >/dev/null 2>&1 || fail 'Required command not found: docker'
[[ -f Dockerfile ]] || fail 'Dockerfile not found'
docker info >/dev/null

export IMAGE_NAME IMAGE_TAG="$VERSION"
compose() { docker compose -f "$COMPOSE_FILE" "$@"; }

if [[ "$BUILD_ONLY" == false ]]; then
  if [[ -z "$COMPOSE_FILE" ]]; then
    for candidate in docker-compose.yml docker-compose.yaml compose.yml compose.yaml; do
      if [[ -f "$candidate" ]]; then COMPOSE_FILE="$candidate"; break; fi
    done
  fi
  [[ -f "$COMPOSE_FILE" ]] || fail 'Compose file not found; use --compose-file'
  docker compose version >/dev/null
  compose config --quiet
  services="$(compose config --services)"
  found=false
  while IFS= read -r service; do
    if [[ "$service" == "$SERVICE_NAME" ]]; then found=true; fi
  done <<< "$services"
  [[ "$found" == true ]] || fail "Compose service not found: $SERVICE_NAME"
fi

GIT_HASH="$(git rev-parse --short HEAD 2>/dev/null || printf 'unknown')"
BUILD_DATE="$(date -u '+%Y-%m-%dT%H:%M:%SZ')"
log "Building $IMAGE_NAME:$VERSION ($GIT_HASH)"
docker build --pull \
  --build-arg "REACT_APP_API_ENDPOINT=$REACT_APP_API_ENDPOINT" \
  --build-arg "GIT_HASH=$GIT_HASH" \
  --build-arg "BUILD_DATE=$BUILD_DATE" \
  --build-arg "APP_VERSION=$VERSION" \
  -t "$IMAGE_NAME:$VERSION" -t "$IMAGE_NAME:latest" .

if [[ "$BUILD_ONLY" == true ]]; then
  log "Build complete: $IMAGE_NAME:$VERSION. Deployment skipped."
  exit 0
fi

log "Deploying $SERVICE_NAME with $COMPOSE_FILE"
compose up -d --no-deps --force-recreate --wait --wait-timeout 120 "$SERVICE_NAME"

LOG_FILE=''
if [[ "$FOLLOW_LOGS" == true ]]; then
  mkdir -p logs
  LOG_FILE="logs/build-$(date '+%Y%m%d-%H%M%S').log"
  nohup docker compose -f "$COMPOSE_FILE" logs --tail 100 -f "$SERVICE_NAME" >"$LOG_FILE" 2>&1 &
  log "Log capture PID: $! ($LOG_FILE)"
fi

log 'Build and deploy complete; service health check passed.'
printf '  Image:   %s:%s\n  Compose: %s\n  Service: %s\n' "$IMAGE_NAME" "$VERSION" "$COMPOSE_FILE" "$SERVICE_NAME"
printf '  URL:     %s\n' "${APP_URL:-http://localhost:${APP_PORT:-3001}}"
if [[ -n "$LOG_FILE" ]]; then printf '  Logs:    %s\n' "$LOG_FILE"; fi
