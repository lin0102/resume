const config = {
  /**
   * 顶部的参数
   */
  title: {
    /**
     * 姓名
     */
    name: '张德明',
    
    /**
     * 昵称
     * 会显示在姓名的右方
     */
    nickName: 'Coder Ming',

    // 意向的工作
    job: 'web前端工程师',
    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是17， 16， 15
     * 建议区分各种信息的层级
     */
    profiles: [
      "男 / 1998.06",
      "重庆邮电大学 · 计算机科学与技术 · 大二",
      "一年+ 前端学习经验"
    ],
    /**
     * 练习信息栏
     * @param {[Object]} 传递的信息
     * address： 渲染出来的文本信息
     * type（可选）：icon的名称
     * icon目前有以下五种： blog, github, mail, qq, wechat
     * 如果有更多的icon需求
     * 请提issue
     */
    contacts: [
      {address: 'https://coderming.com', type: 'blog'},
      {address: 'github.com/coderming', type: 'github'},
      {address: 'coderming@foxmail.com', type: 'mail'},
      {address: '363781303', type: 'qq'},
    ],
    weChatQrCode: true,
  }
  
}

export default config
