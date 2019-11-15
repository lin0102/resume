/*
 * @Author: your name
 * @Date: 2019-11-13 22:42:18
 * @LastEditTime: 2019-11-15 14:21:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \resume\nuxt.config.js
 */
const dayjs = require('dayjs')

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  router:
    process.env.NODE_ENV === 'production'
      ? {
          base: './'
        }
      : {},
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  server: {
    port: 4002 // 运行端口
  },
  /**
   * 环境变量
   */
  env: {
    BUILT_TIME: dayjs().format('YYYY年MM月DD日 HH:mm') // 构建时间
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
