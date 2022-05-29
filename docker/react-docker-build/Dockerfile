FROM node:16.15.0-buster

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "run", "start" ]