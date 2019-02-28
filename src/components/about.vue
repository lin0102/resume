<template lang="pug">
a#about(href="https://github.com/coderming" target="_blank")
  span @ CoderMing
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style scoped lang="stylus">
@import '../config.styl'   

#about
  font-family 'Museo Sans', $fontFamily
  position absolute
  size 200px auto
  font-size 14px
  line-height 2em
  box-sizing border-box
  text-align center
  padding 0 10px
  top 1476px
  left 50%
  margin-left -100px
  color #C8C8C8
  opacity .5
  transition all .3s
  &:hover
    opacity 1

  span.pi-right
    float right

@media print
  #about
    display none

@media screen and (max-width 1024px)
  #about
    left 0
    margin 0 auto
    text-align center
    box-sizing border-box
    size 100% auto
    display block
    padding 0 0 10px
    margin-top -30px
    position relative
    top 65px
</style>
