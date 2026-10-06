FROM node:18 AS builder
ENV NODE_ENV production

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps --loglevel=error
RUN npx update-browserslist-db@latest
ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build


FROM nginx:1.21.0-alpine as nginx
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html
#COPY build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]