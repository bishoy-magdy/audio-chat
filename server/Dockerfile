FROM node:18.16.0-alpine3.17

WORKDIR /src

COPY . .

WORKDIR /src/

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start" ]