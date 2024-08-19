FROM node:20-alpine AS builder

COPY . /app

WORKDIR /app

RUN npm install --silent

RUN npm install react-scripts@5.0.1 -g --silent

RUN npm run build

FROM nginx:1.27.1 AS production

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80