<template lang="pug">
  #print(@click="printPage")
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
  span:last-child
    margin-left 4px

@media screen and (max-width 1250px)
  #print
    left inherit
    right 5px
    margin-left 0

</style>
