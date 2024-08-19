FROM node:20-alpine AS builder

COPY . /app

WORKDIR /app

RUN npm install --silent

RUN npm run build

FROM nginx:alpine AS production

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
