<template lang="pug">
#padi
  span.pi-left(v-html="left")
  span.pi-right(v-html="right")
</template>

<script>
import config from '../config.js'

export default {
  data: () => {
    let data = config.footer
    
    if (data.setDefaultRightUrl && !data.right && data.right.length === 0) {
      let currentUrl = window.location.toString()
      data.right = `<a href="${currentUrl}">网页版简历：${currentUrl}</a>`
    }

    return data
  }
}
</script>

<style scoped lang="stylus">
@import '../config.styl'

a 
  font-family "Museo Sans", $fontFamily !important

#padi
  position absolute
  overflow hidden
  size 100vw auto
  max-width 1024px
  font-size 14px
  line-height 2em
  box-sizing border-box
  padding 0 10px
  top 1440px
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
