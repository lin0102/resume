/**
 * 简历配置文件
 * @author CoderMing 
 * https://github.com/coderming
 */
const config = {
  /**
   * 显示修正日期栏
   * 若为空，则不显示
   * @param {[String]} 需要显示的内容
   */
  changeInfo: {
    article: '最后更新时间：2018年5月'
  },

  /**
   * 顶部栏的配置参数
   */
  title: {
    // 姓名
    name: '张德明',
    
    // 昵称
    // 会显示在姓名的右方
    // 在pad和手机上不会显示
    nickName: '',

    // 意向的工作
    job: 'web前端工程师',

    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是17， 16， 15
     * 建议区分各种信息的层级
     * 建议字数不超过15字
     */
    profiles: [
      "男 / 1998.06",
      "重庆邮电大学 · 计算机科学与技术 · 大二",
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
     * icon目前有以下五种： blog, github, mail, qq, wechat
     * 如果有更多的icon需求
     * 请提issue
     */
    contacts: [
      {address: 'coderming.com', type: 'blog'},
      {address: 'github.com/coderming', type: 'github'},
      {address: 'coderming@foxmail.com', type: 'mail'},
      {address: '363781303', type: 'qq'},
    ],
    /**
     * @param {[Boolean]} 是否显示微信二维码
     * 二维码在pad和手机端不会显示
     * 如果为true，将自动加载 项目根目录/src/static/wechat.png 这个路径的图片
     * 注意是png格式，长宽比应为1:1
     */
    weChatQrCode: true,
  }
  
}

export default config
