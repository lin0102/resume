module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = './'
      // config.plugins.forEach(el => {
      //   if(el.options && el.options.env && el.options.env.BASE_URL) {
      //     el.options.env.BASE_URL = './'
      //   }
      // })
      // 为生产环境修改配置...
    } else {
      // config.output.publicPath = './'
      // config.plugins.forEach(el => {
      //   if(el.options && el.options.env && el.options.env.BASE_URL) {
      //     el.options.env.BASE_URL = './'
      //   }
      // })
      
      
    }
  }
}