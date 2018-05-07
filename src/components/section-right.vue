<template lang="pug">
  section.s-right
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

.s-right
  float right
  margin-top 30px
  width 50%
  height 1100px
  box-sizing border-box
  padding 0 30px


@media screen and (max-width 1024px)
  .s-right
    size 100% auto
    float none
    clear both

</style>
