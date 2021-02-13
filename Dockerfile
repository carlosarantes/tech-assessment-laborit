FROM node:14-alpine

COPY . .
RUN npm i

CMD [ "npm", "run", "start" ]