FROM node:16.14-alpine3.14 as base

EXPOSE 8000
ENV NODE_ENV=development
ENV PORT=8000

WORKDIR /code

COPY package*.json ./
COPY /src ./src
COPY tsconfig*.json ./

RUN npm install

CMD [ "npm", "run", "start:dev" ]
