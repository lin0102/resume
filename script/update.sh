# 自动拉取并更新脚本
touch /update.log
cd /app
echo "`date`: 开始拉取更新" >> /uptate.log
git pull
npm config set registry "https://registry.npm.taobao.org/"
npm install
npm run build
echo "`date`: 更新完成" >> /uptate.log
