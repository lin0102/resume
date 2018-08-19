<template lang="pug">
  div#content
    Header
    //- 处理只想显示单列的情况
    SectionLeft(:class="sectionRight ? '' : 'one-section'") 
    SectionRight(v-if="sectionRight")
    Print
    Title
    Footer
    About(v-if="showAboutInfo")
    Github(v-if="githubLogoLocation")
</template>

<script>
import Print from './components/print.vue'
import Header from './components/header.vue'
import SectionLeft from './components/section-left.vue'
import SectionRight from './components/section-right.vue'
import Title from './components/title.vue'
import Footer from './components/footer.vue'
import About from './components/about.vue'
import Github from './components/github.vue'

import config from './config.js'

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
console.log(config)
export default {
  name: 'resume',
  data: () => config,
  components: {
    Print,
    Header,
    SectionLeft,
    SectionRight,
    Title,
    Footer,
    About,
    Github
  }
}
</script>

<style lang="stylus">
@import './config.styl'
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

*::selection
  background $selectionColor

a
  text-decoration none
  color inherit

.print-show
  display none
.print-hide
  display inherit

#content
  position relative
  background white
  size 1024px 1430px
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
    box-shadow none
</style>
