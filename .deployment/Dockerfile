FROM node:17.9.0-alpine

WORKDIR /app

COPY ./ /app

RUN npm install
RUN npm run build

EXPOSE 9090
EXPOSE 4000
EXPOSE 3000
EXPOSE 5432

CMD ["npm", "start"]