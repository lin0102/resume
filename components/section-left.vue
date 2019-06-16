<template lang="pug">
div.s-left
  .s-item(v-for="item in sectionLeft")
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

console.log(SectionConfig.left)
export default {
  data: () => {
    return { SectionLeft: SectionConfig.left }
  }
}
</script>

<style lang="stylus">
@import '../config/index.styl'
@import '../styles/public/section.styl'

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

</style>
