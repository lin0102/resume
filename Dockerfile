FROM node:slim

WORKDIR /app
COPY . /app

RUN    rm -rf node_modules \
    && rm -rf dist \
    && rm -rf .vscode \
    && npm config set registry "https://registry.npm.taobao.org/" \
    && npm install \
    && npm run build \
    && rm -rf node_modules \
    && npm i --production \
    && rm -rf src \
    && rm -rf public \
    && rm -f package-lock.json

EXPOSE 3000

CMD    node prod-serve.js