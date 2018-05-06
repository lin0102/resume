<template lang="pug">
  a#about(v-if="showAboutInfo"
          href="https://github.com/coderming")
    span.iconfont.icon-share_link
    span 模版 by CoderMing
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

#about
  position absolute
  size 200px auto
  font-size 14px
  line-height 2em
  box-sizing border-box
  padding 0 10px
  top 1450px
  left 50%
  margin-left -100px
  color #DDDDDD

  span.pi-right
    float right

@media print
  #about
    display none
</style>
