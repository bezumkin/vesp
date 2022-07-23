ARG NODE_VERSION=${NODE_VERSION}

FROM node:${NODE_VERSION}-alpine

WORKDIR /vesp/frontend
CMD yarn && ([ -d dist ] || yarn generate) && yarn dev