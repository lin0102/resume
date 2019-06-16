<template lang="pug">
  div#gitalk-container
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { GitalkConfig } from '../config/index.js'

export default {
  data () {
    return {}
  },

  mounted() {
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
  padding-bottom 50px
  color #666

@media print
  #gitalk-container
    display none

@media (max-width 1024px)
  #gitalk-container
    padding 20px
    margin-top 50px


</style>
