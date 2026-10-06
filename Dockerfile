FROM node:18 AS builder
ENV NODE_ENV=production

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --include=dev --legacy-peer-deps --no-audit --no-fund

COPY . .

ARG REACT_APP_API_ENDPOINT
RUN if [ -n "$REACT_APP_API_ENDPOINT" ]; then \
      REACT_APP_API_ENDPOINT="$REACT_APP_API_ENDPOINT" npm run build; \
    else npm run build; fi

FROM nginx:1.21.0-alpine AS nginx
ENV NODE_ENV=production

ARG GIT_HASH=unknown
ARG BUILD_DATE
ARG APP_VERSION=1.0.0
LABEL org.opencontainers.image.revision=$GIT_HASH \
      org.opencontainers.image.created=$BUILD_DATE \
      org.opencontainers.image.version=$APP_VERSION

COPY --from=builder /app/build /usr/share/nginx/html
#COPY build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
