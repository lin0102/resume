<template lang="pug">
  a#github(href="https://github.com/coderming")
    span fork me on Github
    img(src="../static/github.svg")
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style scoped lang="stylus">
@import '../config.styl'   

#github
  position fixed
  left calc(50vw - 650px)
  bottom -25px
  transition all .3s
  opacity .4
  &:hover
    bottom -8px
    opacity 1
    span 
      opacity 1
  img 
    size 50px
  span
    font-size 15px
    display block
    text-align center
    position relative 
    width 140px
    margin-left -45px
    margin-bottom 5px
    background #d0d0d0
    color white
    padding 2px 8px
    box-sizing border-box
    border-radius 5px
    transition all .3s
    opacity 0
    
@media screen and (max-width 1440px)
  #github
    display none

@media print
  #github
    display none

</style>
