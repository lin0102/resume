<template lang="pug">
  div#gitalk-container(v-if="{isShowContainer}")
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { GitalkConfig } from '../config/index.js'

let isShowContainer = true
// 如果不使用，就不去渲染
if (!GitalkConfig) isShowContainer = false

export default {
  data () {
    return {
      isShowContainer
    }
  },

  mounted() {
    if (!GitalkConfig) return void 0

    const gitalk = new Gitalk(GitalkConfig)

    gitalk.render('gitalk-container')
  }
}
</script>

<style scoped lang="stylus">
@import '../config/index.styl'

#gitalk-container
  max-width 1024px
  height auto
  margin 0 auto
  color #666
  margin-bottom -20px

@media print
  #gitalk-container
    display none

@media (max-width 1024px)
  #gitalk-container
    padding 20px 20px 0
    margin-top 50px


</style>
