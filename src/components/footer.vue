<template lang="pug">
  #padi
    span.pi-left {{left}}
    span.pi-right {{right}}
</template>

<script>
import config from '../config.js'

export default {
  data: () => config.footer
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

#padi
  position absolute
  size 1024px auto
  font-size 14px
  line-height 2em
  box-sizing border-box
  padding 0 10px
  top 1360px
  transform translate(0, 50px)
  color #C0C0C0
  span.pi-right
    float right

@media print
  #padi
    top 1350px
    padding 0 30px
</style>
