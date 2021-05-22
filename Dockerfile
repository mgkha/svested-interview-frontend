FROM node:alpine

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm install

RUN npm run build

EXPOSE $PORT

CMD npm run start