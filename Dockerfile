FROM node:slim

WORKDIR /app
COPY . /app

RUN    rm -rf node_modules \
    && rm -rf dist \
    && rm -rf .vscode \
    && npm config set registry "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 3000

CMD    npm run production-serve