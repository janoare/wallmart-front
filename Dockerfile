
FROM node:10
 
WORKDIR /usr/src/app
 
COPY package*.json ./
 
ARG BACKEND_HOST

ENV BACKEND_HOST $BACKEND_HOST

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]