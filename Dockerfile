FROM node

WORKDIR /app
COPY . /app

ADD /script/crontab /etc/cron.d/cron
RUN chmod 0644 /etc/cron.d/cron

RUN apt-get update && apt-get -y install cron

RUN chmod +x /app/script/update.sh

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install \
    && npm run build
    
EXPOSE 3000

CMD service cron start && node prod-serve.js