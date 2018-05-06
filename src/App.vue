<template lang="pug">
  div#content
    Title
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Title from './components/title.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Title
  }
}
</script>

<style lang="stylus">
@import './styles/config.styl'
@import './styles/iconfont/iconfont.css'

@css {
  html, body, h1, h2, h3, h4, h5, h6, hr, p {
    font-size: 50px;
    font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
      "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }
  h1 {
    font-family: "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3", $font-family
  }
}
html, body, h1, h2, h3, h4, h5, h6, hr, p
  margin 0
  padding 0
  font-family $fontFamily

body
  background $bgColor

#content
  background white
  size 1024px 1447px
  margin 55px auto 100px
  border-radius 5px
  overflow hidden
  box-shadow 0 0 15px silver
  transition all .2s ease-out

@media print
  #content
    border-radius 0
    margin 0

@media screen and (max-width 1024px)
  body
    background white
    
  #content
    size 100% auto
    margin 0
    border-radius 0
    min-width 320px
</style>
