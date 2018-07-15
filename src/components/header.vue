<template lang="pug">
  header
    .qrcode(v-if="weChatQrCode")
      img(src="../static/wechat.png")
    .tit-top
      h1.name {{name}}
      small.nick(v-if="nickName") {{nickName}}
      h2.job {{job}}
    .tit-bottom
      .tb-left
        h3.tbl-item(v-for="item in profiles") {{item}}
      .tb-right
        a(class="tbr-item"
          v-for="item in contacts"
          :href="judjeLink(item) && judjeLink(item) + item.address")
          span(v-html="item.showAddr")
          span(:class="judjeIcon(item)" class="iconfont")
        a(:class="judjeIcon(item)" class="iconfont tbr-item-mobile" 
             v-for="item in contacts"
             :href="judjeLink(item) && judjeLink(item) + item.address")
</template>

<script>
import config from '../config.js'

export default {
  data: () => {
    let reData = config.header
    reData.contacts.forEach(item => {
      if (item.type === 'tell')
        return item.showAddr = 
        `${item.address.slice(0, 3)}
         ${item.address.slice(3, -4)}
         <span class="print-hide">****</span>
         <span class="print-show">${item.address.slice(-4)}</span>`
      item.showAddr = item.address
    })
    return reData
  },
  methods: {
    judjeIcon(item) {
      switch (item.type) {
        case 'github': return 'icon-github'
        case 'mail': return 'icon-youjian'
        case 'blog': return 'icon-zhuye'
        case 'wechat': return 'icon-weixin'
        case 'qq': return 'icon-qq'
        case 'tell': return 'icon-dianhua'
        default: return ''
      }
    },
    judjeLink(item) {
      switch (item.type) {
        case 'github': return 'https://'
        case 'mail': return 'mailto:'
        case 'blog': return 'http://'
        case 'tell': return 'tel:'
        default: return '##'
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

header
  size 100% 250px
  color white
  background $mainColor
  border-radius 5px 5px 0 0
  box-sizing border-box
  padding 25px 60px 25px
  overflow hidden

  .qrcode
    float left
    size 180px
    margin 8px 25px 0 0
    img
      size 100%

  .tit-top
    overflow hidden
    padding-bottom 6px
    border-bottom 2px solid rgba(0, 0, 0, .1)
    h1
      font-size 50px
      font-weight 500
      float left
    small
      padding-left 20px
      font-size 24px
      font-weight 400
    h2
      float right
      font-weight 300
      font-size 30px
      opacity .8
      margin-top 20px

  .tit-bottom
    box-sizing border-box
    padding 15px 0

    .tb-left
      float left
      h3.tbl-item
        font-weight 400
        font-size 16px
        opacity .9
        line-height 2.25em
        &:first-child
          font-size 18px

    .tb-right
      float right
      margin-top -2px
      text-align center
      a.tbr-item
        display block
        white-space nowrap
        font-weight 400
        font-size 15px
        line-height 1.8em
        text-align right
        transition opacity .2s ease
        &:hover
          opacity .7
        span.iconfont
          padding-left 5px
      a.tbr-item-mobile
        display none
        padding 0 15px

@media print
  header
    border-radius 0
    background white
    color $mainHeaderColor
    margin-bottom -10px
    padding-top 45px
    .tit-top
      border-bottom-color $mainColor


@media screen and (max-width 1024px)
  header
    border-radius 0 !important
    .qrcode
      display none

// 原谅我 就不再嵌套调用了
// 所以这儿会出现很多的!important， emmm...
@media screen and (max-width 720px)
  header
    height auto
    padding 20px 30px
  
  .nick, .tbr-item
    display none !important
    

  h1, small, h2, h3, .tb-left
    display block
    clear both
    float none !important
    margin 0 auto !important
    text-align center !important
    
  .tbl-item
    text-align center !important

  h1
    font-size 40px !important
    padding-top .3em
  h2
    font-size 28px !important
    line-height 2em
  h3
    font-size 16px !important

  .tb-right
    margin-top -10px !important
    size 100% auto
    .tbr-item-mobile
      display inline !important
  

</style>
