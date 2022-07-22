ARG NODE_VERSION=${NODE_VERSION}

FROM node:${NODE_VERSION}-alpine

RUN apk update && apk upgrade

WORKDIR /vesp/frontend

CMD yarn && ([ -d dist ] || yarn generate) && yarn dev