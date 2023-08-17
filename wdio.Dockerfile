FROM node:16-alpine

ENV NODE_PATH /install/node_modules/
ENV PATH /install/node_modules/.bin:$PATH

RUN apk --update add rsync autoconf automake libtool nasm build-base python3 && \
    apk add --no-cache libstdc++ procps && \
    npm i npm@latest -g && \
    rm -rf /var/cache/apk/* && \
    mkdir -p /wdio && \
    cd /wdio

COPY [".", "/wdio/"]

RUN yarn config set strict-ssl false


RUN cd /wdio && \
    yarn install

WORKDIR /wdio
