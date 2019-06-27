<template lang="pug">
  section#main-in
    vue-markdown {{SectionContent}}
</template>

<script>
  import { SectionConfig, SectionContent } from '../config/index.js'
  import VueMarkdown from 'vue-markdown'

  export default {
    data: () => {
      return { SectionConfig, SectionContent }
    },
    components: {
      'vue-markdown': VueMarkdown
    }
  }
</script>

<style lang="stylus">
  @import '../config/index.styl'

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
    column-break-inside avoid
    padding 30px 32px 0
    color $mainFontColor

  @media screen and (max-width 1024px)
    #main-in
      size 100% auto
      float none
      clear both
      border none
      padding 30px 20px
      min-height 0px
      column-count 1

  .need-bold
    font-weight 700
    font-size $articleSize + 1px !important
    line-height 1.7em
    padding-top .3em
  h3
    font-size 24px
    size 100% auto
    background rgba($mainColor, .08)
    color #222
    line-height 1.6em
    padding-left 10px
    box-sizing border-box
    border-left 5px solid $mainColor
    margin-bottom 5px
  .si-p
    font-size $articleSize
    color #4A4A4A
    line-height 1.56em
    position relative
    padding-top .4em
    &.have-dot
      padding-left 10px
    span.sip-dot
      position absolute
      color $mainColor
      padding 0 3px
      left -4px
      font-size 20px
      line-height $articleSize * 1.8
      top 3px
      font-weight 900
      & + .sip-left
        // font-family $fontFamily
        line-height: 1.5em
    .sip-left
      font-family Museo Sans, $fontFamily
    .sip-right
      float right
      a
        font-family Museo Sans, $fontFamily
        font-weight 500
        &::after
          content ">"
    a
      font-size $articleSize
      padding 0 6px 1px
      margin-top 1px
      background-color #f6f6f6
      border-radius 3px
      font-weight 600
      color #555
      transition all .2s ease
      // border 1px solid #EEE
      box-sizing border-box
      &:hover
        color white
        background $mainColor
    em
      padding 0 2px
      margin 0 2px
      font-size $articleSize
      background #F8F8F8
      border-radius 2px
      font-style normal
      color #333
    strong, b
      font-weight 700
      em
        color inherit
    strong
      color $mainColor

  @media screen and (max-width 1024px)
    .sip-right
      float none !important
      margin-right 5px

</style>
