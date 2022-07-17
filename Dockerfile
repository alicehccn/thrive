FROM node:18.1.0-alpine3.15

WORKDIR /app
COPY ./ /app

RUN npm install
RUN npm run build

EXPOSE 8080
EXPOSE 5432
EXPOSE 80
EXPOSE 443

CMD ["npm", "run", "start:prod"]
