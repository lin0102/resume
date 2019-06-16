<template lang="pug">
#body-container
  div#content
    Header
    Section
    Print
    Title
    Footer
    About(v-if="showAboutInfo")
    Github(v-if="githubLogoLocation")
  no-ssr
    Discuss
</template>

<script>
import Print from '../components/print.vue'
import Header from '../components/header.vue'
import Section from '../components/section.vue'
import Title from '../components/title.vue'
import Footer from '../components/footer.vue'
import About from '../components/about.vue'
import Github from '../components/github.vue'
import Discuss from '../components/discuss.vue'

import config from '../config/index.js'

if (process.client) {
  // 引入用户自定义网页标题
  if (config.title)
    window.document.title = config.docName
  // 引入rel描述meta
  document.head.innerHTML +=
  `<meta \
    name="description" \
    content="${config.description
              || (config.header.name + (config.header.nickName ? `（${config.header.nickName}）` : '') +
              `的个人简历 - ${config.header.job}`)}">`
}

export default {
  name: 'resume',
  data: () => config,
  components: {
    Print,
    Header,
    Section,
    Title,
    Footer,
    About,
    Github,
    Discuss
  }
}
</script>

<style lang="stylus">
@import '../styles/iconfont/iconfont.css'
@import '../styles/font/font.css'
@import '../config/index.styl'

@css {
  html, body, h1, h2, h3, h4, h5, h6, hr, p {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
  }
  h1 {
    font-family: "Lucida Grande", "Hiragino Sans GB", "Hiragino Sans GB W3"
  }
}
html, body, h1, h2, h3, h4, h5, h6, hr, p
  margin 0
  padding 0
  font-family $fontFamily

body
  background $bgColor

// 选择后文字的背景色，默认就会计算好与主色搭配的配色
*::selection
  background $mainColor + rgba(48, 48, 48, 0) - rgba(0, 0, 0, .6)

a
  font-family 'Museo Sans', $fontFamily
  text-decoration none
  color inherit

.print-show
  display none
.print-hide
  display inherit

#content
  position relative
  size 1024px auto
  min-height 1430px
  margin 55px auto 100px
  box-shadow 0 0 15px silver
  border-radius 5px
  transition all .2s ease-out

@media print
  #content
    border-radius 0
    margin 0
    height 1447px
    overflow hidden
    background white
  .print-hide
    display none
  .print-show
    display inherit

@media screen and (max-width 1024px)
  body
    background white

  #content
    size 100% auto
    margin 0
    border-radius 0
    min-width 320px
    min-height 0
    box-shadow none
</style>
