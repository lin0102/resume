<template lang="pug">
  section.s-left
    p {{123414}}
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

.s-left
  float left
  margin-top 30px
  width 50%
  height 1080px
  box-sizing border-box
  padding 0 30px
  border-right 1px solid #EEEEEE


@media screen and (max-width 1024px)
  .s-left
    width: 100%
    float none
    clear both
    border none

</style>
