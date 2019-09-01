<template lang="pug">
#padi
  span.pi-left
    vue-markdown(:source="left")
  span.pi-right
    vue-markdown(:source="right")
</template>

<script>
import { FooterConfig } from '../config/index.js'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  data: () => {
    let data = FooterConfig

    if (process.client) {
      if (data.setDefaultRightUrl && !data.right && data.right.length === 0) {
        let { hostname, pathname, port } = window.location
        // 如果是根目录 那么就别显示‘/’
        if (pathname === '/') pathname = ''
        // 如果是80 or 443 就block掉端口
        if (port === '80' || port === '443' || port === '') port = ''
        else port = ':' + port

        let currentUrl = hostname + port + pathname
        data.right = `<a href="${window.location.href}">网页版简历：${currentUrl}</a>`
      }
    }

    return data
  }
}
</script>

<style scoped lang="stylus">
@import '../config/index.styl'

a
  font-family "Museo Sans", $fontFamily !important

#padi
  position absolute
  left 0
  bottom -35px
  overflow hidden
  size 100vw auto
  max-width 1024px
  font-size 14px
  line-height 2em
  box-sizing border-box
  padding 0 10px
  color #C0C0C0
  font-family Museo Sans, $fontFamily !important
  span.pi-right
    float right

@media print
  #padi
    top 1405px
    padding 0 30px
    width 1024px

@media screen and (max-width 1024px)
  #padi
    position relative
    top 30px
    box-sizing border-box
    span
      display block
      float none !important
      text-align center
      clear both
      width 100%
</style>
