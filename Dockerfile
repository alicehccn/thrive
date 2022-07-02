FROM node:17.9.0-alpine

WORKDIR /app

COPY ./ /app

RUN npm install
RUN npm run build

EXPOSE 5432
EXPOSE 3000

CMD ["npm", "start"]