/**
 * 简历配置文件
 * @author CoderMing 
 * https://github.com/coderming
 */
const config = {
  /**
   * 脚标栏
   * 网页显示的时候 将会显示在页面下方（非页面上）
   * 打印时会显示在页面最下面
   * 若为空，则不显示   
   * 建议每边不超过15字
   * @param {[String]} 需要显示的内容
   */
  footer: {
    left: '网页版简历：coderming.com/                   resume ',
    right: '网页版简历：coderming.com/resume'
  },
  /**
   * 顶部栏
   * 用法和footer一样
   * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
   */
  title: {
    left: '最后更新时间：2018年5月',
    right: '网页版简历：coderming.com/resume'
  },

  /**
   * 顶部栏的配置参数
   */
  header: {
    // 姓名
    name: '张德明',
    
    // 昵称
    // 会显示在姓名的右方
    // 在pad和手机上不会显示
    nickName: '',

    // 意向的工作
    // 建议不超过8个字
    job: 'web前端开发工程师',

    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是17， 16， 15
     * 建议区分各种信息的层级
     * 建议字数不超过15字
     */
    profiles: [
      "男 / 2020年毕业",
      "重庆邮电大学 · 计算机科学与技术",
      "一年+ 前端学习经验"
    ],
    /**
     * 练习信息栏
     * @param {[Object]} 需要显示的信息
     * 最多可显示4条
     * 在pad和手机上只会显示logo
     * address： 渲染出来的文本信息
     * 注意：请勿添加协议名，若添加，将会导致链接出错
     * type（可选）：icon的名称
     * icon目前有以下五种： tell, blog, github, mail, qq, wechat
     * 如果有更多的icon需求
     * 请提issue
     */
    contacts: [
      {address: 'coderming.com', type: 'blog'},
      {address: 'github.com/coderming', type: 'github'},
      {address: 'coderming@foxmail.com', type: 'mail'},
      {address: '17323410086', type: 'tell'},
    ],
    /**
     * @param {[Boolean]} 是否显示微信二维码
     * 二维码在pad和手机端不会显示
     * 如果为true，将自动加载 项目根目录/src/static/wechat.png 这个路径的图片
     * 注意是png格式，长宽比应为1:1
     */
    weChatQrCode: true,
  },

  /**
   * 正文部分
   * 说明：本模版采用两栏式显示
   * 分别呢 sectionLeft 和 sectionRight
   * 两栏的东西不会合并显示
   * 请自己判断并适应页面尺寸
   */
  sectionLeft: [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: '教育经历',
      content: [
        /**
         * 有以下几种情况：
         * 当type === 'article' 时：
         *   article：需要显示的文字
         *   showDot：是否展示该段文字左边的小点
         *   smallArticle：article 之后的小文字
         * 当type === 'twoBlock'时：
         *   left：左侧要显示的文字
         *   right：右侧要显示的文字
         */
        {article: ''}
      ]
    }
  ],

  /**
   * 是否展示界面最下方 “模版 by CoderMing” 字样
   * 如果你认为在个人的页面上显示此条消息不合适，可以通过此方法快速消除
   * 什么？你 star 没给也好意思注释这一条？？？ :(
   */
  showAboutInfo: true
}

export default config
