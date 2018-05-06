<template lang="pug">
  div#content
    Header
    Print
    Title
    Footer
    About
</template>

<script>
import Print from './components/print.vue'
import Header from './components/header.vue'
import Title from './components/title.vue'
import Footer from './components/footer.vue'
import About from './components/about.vue'

export default {
  name: 'app',
  components: {
    Print,
    Header,
    Title,
    Footer,
    About,
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
html, body, h1, h2, h3, h4, h5, h6, hr, p, a
  margin 0
  padding 0
  font-family $fontFamily

body
  background $bgColor

a
  text-decoration none
  color inherit

#content
  position relative
  background white
  size 1024px 1400px
  margin 55px auto 100px
  border-radius 5px
  // overflow hidden
  box-shadow 0 0 15px silver
  transition all .2s ease-out

@media print
  #content
    border-radius 0
    margin 0
    height 1447px

@media screen and (max-width 1024px)
  body
    background white

  #content
    size 100% auto
    margin 0
    border-radius 0
    min-width 320px
</style>
