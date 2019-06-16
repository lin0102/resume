import './env'
/**
 * 简历内容配置文件
 * @author CoderMing
 * https://github.com/coderming
 * 若想修改样式的配置参数，请修改同目录下的 config.styl 文件
 *
 * 全局变量（会在build时注入到dist中，可以在代码中直接使用）：
 * @param {[String]} process.env.BUILT_TIME 运行build task时的时间，格式：'xxxx年xx月xx日 xx:xx'
 */
const config = {
  /**
   * HTML页面的title
   * @param {[String]}
   */
  docName: '简历 | 张德明',
  /**
   * 此处是针对SEO优化
   * 会在搜索引擎的摘要界面显示。
   * 默认值为: 张xx(小张)的个人简历 - 搬砖工程师
   * 即默认会展示你的姓名，昵称，职位字段
   */
  description: '张德明（CoderMing）的个人简历 - Web前端工程师',
  /**
   * 生成PDF的默认文件名
   * 若不指定，默认为HTML页面的title去除空格后的结果
   * 此功能仅会在点击右下角打印按钮后触发
   */
  printName: '前端开发实习生-张德明-重庆邮电大学',
  /**
   * 脚标栏
   * 网页显示的时候 将会显示在页面下方（非页面上）
   * 打印时会显示在页面最下面
   * 若为空，则不显示
   * 建议每边不超过15字
   * @param {[String]} 需要显示的内容
   */
  footer: {
    left: '页面中蓝色框均为可点击的链接',
    right: '',
    // 设置footer right字段是否默认为当前网页展示URL
    // 当right字段为空且此字段为true时，right部分会显示 "网页版简历：${location.url}"
    setDefaultRightUrl: true
  },
  /**
   * 顶部栏
   * 用法和footer一样
   * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
   */
  title: {
    left: `最后同步时间：${process.env.BUILT_TIME}`,
    right: ''
  },
  /**
   * 顶部栏的配置参数
   */
  header: {
    // 姓名
    name: '张德明',
    // GitHub地址
    // 会显示在姓名的右方
    // 在手机上会显示成小logo
    github: 'CoderMing',
    // 意向的工作
    // 建议不超过8个字
    job: '前端开发工程师',
    /**
     * 简介栏
     * 最多可以有三个
     * 建议区分各种信息的层级
     */
    profiles: [
      '男 · 1998.5 · 2020 届本科',
      '重庆邮电大学 · 计算机科学与技术',
      '大一开始自学前端 · 综合成绩前 10%（18/278）'
    ],
    /**
     * 信息栏
     * @param {[Object]} 需要显示的信息
     * 最多可显示3条
     * 在pad和手机上只会显示logo
     * address： 渲染出来的文本信息
     * 注意：请勿添加协议名，若添加，将会导致链接出错
     * type（可选）：icon的名称
     * icon目前有以下几种： tell, blog, github, mail, qq, wechat
     * 如果有更多的icon需求
     * 请提issue
     */
    contacts: [
      { address: 'coderming@foxmail.com', type: 'mail' },
      { address: 'coderming.com', type: 'blog' },
      { address: '17323410086', type: 'tell' }
    ],
    /**
     * @param {[Boolean]} 是否显示微信二维码
     * 二维码在pad和手机端不会显示
     * 如果为true，将自动加载 项目根目录/src/static/wechat.png 这个路径的图片
     * 注意是png格式，长宽比应为1:1
     */
    weChatQrCode: true,
    /**
     * 是否在HTML文档页面显示二维码
     */
    showWeChatQrCodeInHTML: true
  },


  /**
   * 设定 Github Logo 地址
   * 若为空，则不显示
   * 此logo会在页面大小大于1440px时显示
   */
  githubLogoLocation: 'https://github.com/coderming/resume',

  /**
   * 是否展示界面最下方 “@ CoderMing” 字样
   * 如果你认为在个人的页面上显示此条消息不合适，可以通过此方法快速消除
   * 什么？你 star 没给也好意思注释这一条？？？ :(
   */
  showAboutInfo: true
}

export default config

export { default as GitalkConfig } from './render/gitalk'

export { default as SectionConfig } from './render/section'
