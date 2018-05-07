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
    
    config.footer.left = config.footer.left.replace(/\ /g, '&nbsp')
    config.footer.right = config.footer.right.replace(/\ /g, '&nbsp')

    return data
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

#padi
  position absolute
  overflow hidden
  size 100vw auto
  max-width 1024px
  font-size 14px
  line-height 2em
  box-sizing border-box
  padding 0 10px
  top 1410px
  color #C0C0C0
  span.pi-right
    float right

@media print
  #padi
    top 1400px
    padding 0 30px
    width 1024px

@media screen and (max-width 1024px)
  #padi
    position relative
    top 80px
    span
      display block
      float none !important
      text-align center
      clear both
      width 100%
</style>
