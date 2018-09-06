# 自动拉取并更新脚本
cd /app
git pull
npm config set registry "https://registry.npm.taobao.org/"
npm install
npm run build