FROM node:14-alpine

WORKDIR /app

COPY package.json .

COPY web-build .

COPY server .

COPY .env .

RUN yarn --production

RUN source .env

EXPOSE $DOCKER_PORT

CMD ["yarn", "start"]
