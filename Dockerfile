FROM node:16.13.0-alpine

WORKDIR /user/src/app/

COPY . .

CMD ["npm", "start"]