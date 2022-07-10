FROM node:17.9.0-alpine

WORKDIR /app

COPY ./ /app

RUN yarn install
RUN yarn build

EXPOSE 5432
EXPOSE 3000
EXPOSE 80
EXPOSE 443

CMD ["yarn", "start"]