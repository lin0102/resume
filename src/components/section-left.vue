<template lang="pug">
  section.s-left
    .s-item(v-for="item in sectionLeft")
      h3 {{item.title}}
      div(:class="{'need-blod': para.blod, 'have-dot': para.showDot}"
          class="si-p"
          v-for="para in item.content")
        span.sip-dot(v-if="para.showDot")  · 
        span.sip-right(v-if="para.right" v-html="para.right")
        span.sip-left(v-html="para.left")
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style lang="stylus">
@import '../config.styl'
@import '../styles/public/section.styl'

.s-left
  float left
  margin-top 30px
  width 50%
  height 1130px
  box-sizing border-box
  padding 0 20px 0 40px
  border-right 1px solid #EEEEEE

// @media print
//   .s-left
//     padding-top 5px

@media screen and (max-width 1024px)
  .s-left
    size 100% auto
    float none
    clear both
    border none
    padding 0 20px


</style>
