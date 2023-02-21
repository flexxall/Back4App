FROM node:latest

RUN mkdir /usr/app

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]