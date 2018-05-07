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
  height 1080px
  box-sizing border-box


@media screen and (max-width 1024px)
  .s-right
    width: 100%
    float none
    clear both

</style>
