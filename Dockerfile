FROM node:latest

# RUN mkdir /root/app

# WORKDIR /root/app
WORKDIR /usr/app

# COPY . /root/app
COPY ./ ./

RUN npm install -g serve
# RUN npm i

EXPOSE 3000

CMD serve -s build