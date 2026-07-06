# I need to ensure the js file is copied into my img
FROM node:latest

WORKDIR /app

COPY main.js /app/

CMD ['node', 'main.js']