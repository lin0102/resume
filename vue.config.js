const dayjs = require('dayjs')
const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  publicPath: './', 
  chainWebpack: (config) => {
    config.plugin('define').tap(def => {
      def[0]['process.env']['BUILT_TIME'] = JSON.stringify(
        dayjs().format('YYYY年MM月DD日 HH:mm')
      )
      return def
    });
  },
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin(
        // npm run build的输出目录
        path.resolve(__dirname, './dist'),
        // 需要进行预渲染的页面
        ['/'], {
          captureAfterTime: 5000,
          maxAttempts: 10,
        }
      )
    ]
  }
}