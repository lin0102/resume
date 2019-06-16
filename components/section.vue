<template lang="pug">
  section#main-in
    .s-item(v-for="item in SectionConfig")
      h3 {{item.title}}
      div(:class="{'need-bold': para.bold, 'have-dot': para.showDot}"
          class="si-p"
          v-for="para in item.content")
        span.sip-dot(v-if="para.showDot")  ·
        span.sip-right(v-if="para.right" v-html="para.right")
        span.sip-left(v-html="para.left")
</template>

<script>
  import { SectionConfig } from '../config/index.js'

  export default {
    data: () => {
      return { SectionConfig }
    }
  }
</script>

<style lang="stylus">
  @import '../config/index.styl'
  @import '../styles/public/section.styl'

  #main-in
    display block
    overflow hidden
    background white
    border-bottom-left-radius 5px
    border-bottom-right-radius 5px
    min-height 1135px
    box-sizing border-box
    border-right 1px solid rgba($mainColor, .15)
    column-count 2
    column-gap 30px
    width 100%
    padding 30px 32px 0

  @media screen and (max-width 1024px)
    #main-in
      size 100% auto
      float none
      clear both
      border none
      padding 30px 20px
      min-height 0px
      column-count 1

</style>
