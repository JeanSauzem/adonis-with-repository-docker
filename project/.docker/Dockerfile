FROM node:14-alpine

RUN apk add --no-cache --upgrade bash && mkdir dpevc

WORKDIR /app

RUN npm install -g @adonisjs/cli

VOLUME [ "app" ]

EXPOSE 3333
