<template lang="pug">
#print(@click="printPage")(:class="isPrintInOnePage ? '' : 'disabled'")
  div(v-if="isPrintInOnePage")
    #tips
      span 请使用 Chrome
      br
      span 并设置为无边距
    span.iconfont.icon-pdf
    span 转为PDF
  div(v-if="!isPrintInOnePage")
    #tips.disabled
      span 当前内容高度大于可打印高度
      br
      span 请删除部分内容
    span.iconfont.icon-pdf
    span 转为PDF
</template>

<script>
import config from '../config.js'

const evBeforePrint = () => {
  window.document.title = config.printName || prevTitle.replace(/\ *\|\ */g, '-')
}

const evAfterPrint = () => {
  window.document.title = config.docName
}

window.addEventListener('beforeprint', evBeforePrint)
window.addEventListener('afterprint', evAfterPrint)



export default {
  data: () => {
    return {
      ...config, 
      // 计算 #content 的高度是否大于1430
      isPrintInOnePage: true
    }
  },
  methods: {
    printPage() {
      evBeforePrint.call(this)
      window.print()
      evAfterPrint.call(this)
    }
  },
  mounted() {
    setTimeout(() => {
      try {
        this.isPrintInOnePage = parseInt(window.getComputedStyle(window.document.querySelector('#content')).height) <= 1430
      } catch(err) {
        return false
      }
    }, 500)
  }
}
</script>

<style scoped lang="stylus">
@import '../config.styl'

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
  &.disabled
    background gray
    #tips
      color gray
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
      
  &:hover #tips
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

@media screen and (max-width 720px)
  #print
    display none

@media print
  #print
    display none
  
</style>
