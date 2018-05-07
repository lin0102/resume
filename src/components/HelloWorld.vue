<template lang="pug">
  div
    p {{name}}
</template>

<script>
import config from '../config.js'

export default {
  data: () => config
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'


</style>
