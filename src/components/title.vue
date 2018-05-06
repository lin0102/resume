<template lang="pug">
  #title
    .qrcode(v-if="weChatQrCode")
      img(src="../static/wechat.png")
    .tit-top
      h1.name {{name}}
        small(v-if="nickName") {{nickName}}
      h2.job {{job}}
    .tit-bottom
      .tb-left
        h3.tbl-item(v-for="item in profiles") {{item}}
      .tb-right
        h4(class="tbr-item" v-for="item in contacts") {{item.address}}
          span(:class="'iconfont ' + judjeIcon(item)")
</template>

<script>
import config from '../config.js'
import path from 'path'

export default {
  data: () => config.title,
  methods: {
    judjeIcon(item) {
      switch (item.type) {
        case 'github': return 'icon-github-a'
        case 'mail': return 'icon-youjian-a'
        case 'blog': return 'icon-zhuye-a'
        case 'wechat': return 'icon-weixin-a'
        case 'qq': return 'icon-qq-a'
        default: return ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
@import '../styles/config.styl'

#title
  size 100% 250px
  color white
  background $mainColor
  box-sizing border-box
  padding 35px 60px 20px

  .qrcode
    float left
    size 180px
    margin 0 25px 0 -25px
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
        line-height 2em
        &:first-child
          font-size 18px
        &:last-child
          font-size 15px

    .tb-right
      float right
      margin-top -2px
      h4.tbr-item
        font-weight 400
        font-size 15px
        line-height 1.8em
        text-align right

</style>
