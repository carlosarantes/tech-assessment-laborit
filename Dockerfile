FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json /
USER node
RUN npm i

COPY --chown=node:node . .

COPY ./docker-entrypoint.sh ./docker-entrypoint.sh

# RUN chmod +x docker-entrypoint.sh
# ENTRYPOINT ["/bin/bash", "./app/entrypoint.sh"]

ENTRYPOINT [ "/bin/bash", "./docker-entrypoint.sh" ]