<template lang="pug">
  #print(@click="printPage")
    #tips
      span 请使用 Chrome
      br
      span 并设置为无边距
    span.iconfont.icon-pdf
    span 转为PDF
</template>

<script>
import config from '../config.js'

export default {
  data: () => config,
  methods: {
    printPage() {
      window.print()
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

#print
  position fixed
  z-index 10
  left 50%
  bottom 5px
  margin-left 520px
  background $mainColor
  padding 3px 7px
  color white
  font-size 15px
  border-radius 3px
  cursor pointer
  #tips
    position absolute
    left 0
    bottom 0
    padding-bottom 28px
    font-size 12px
    color $mainColor
    opacity 0
    size auto
    text-align center
    transition opacity .2s ease
  &:hover>#tips
    opacity 1
  span:last-child
    margin-left 4px

@media screen and (max-width 1250px)
  #print
    left inherit
    right 5px
    margin-left 0
    #tips
      display none

@media print
  #print
    display none
  
</style>
