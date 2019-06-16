<template lang="pug">
section#main-in
  div.s-left
    .s-item(v-for="item in sectionLeft")
      h3 {{item.title}}
      div(:class="{'need-bold': para.bold, 'have-dot': para.showDot}"
          class="si-p"
          v-for="para in item.content")
        span.sip-dot(v-if="para.showDot")  ·
        span.sip-right(v-if="para.right" v-html="para.right")
        span.sip-left(v-html="para.left")
  div.s-right
    .s-item(v-for="item in sectionRight")
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
  data: () => SectionConfig
}
</script>

<style lang="stylus">
@import '../config/index.styl'
@import '../styles/public/section.styl'

#main-in
  overflow hidden
  min-height 1188px
  background white
  border-bottom-left-radius 5px
  border-bottom-right-radius 5px

.s-left
  float left
  margin-top 30px
  width 50%
  min-height 1135px
  box-sizing border-box
  padding 0 20px 0 40px
  border-right 1px solid rgba($mainColor, .15)

@media screen and (max-width 1024px)
  .s-left
    size 100% auto
    float none
    clear both
    border none
    padding 0 20px
    min-height 0px

.s-right
  float right
  margin-top 30px
  width 50%
  min-height 1135px
  box-sizing border-box
  padding 0 40px 0 20px

.one-section
  width 100%
  padding 0 40px

@media screen and (max-width 1024px)
  .s-right
    size 100% auto
    float none
    clear both
    padding 0 20px
    margin-top 0
    min-height 0px

</style>
