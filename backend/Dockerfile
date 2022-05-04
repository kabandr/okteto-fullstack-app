FROM node:16-alpine
ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN yarn install --production

COPY . .

CMD [ "yarn", "server.js" ]