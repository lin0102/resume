const dayjs = require('dayjs')

module.exports = {
  publicPath: './', 
  chainWebpack: (config) => {
    config.plugin('define').tap(def => {
      def[0]['process.env']['BUILT_TIME'] = JSON.stringify(
        dayjs().format('YYYY年MM月DD日 HH:mm')
      )
      return def
    });
  }
}