FROM node:20-alpine

COPY . /backend

WORKDIR /backend

RUN npm install

RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]