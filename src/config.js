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
    left: '',
    right: '网页版简历（带作品链接）：<a href="https://coderming.com/resume" target="_blank">coderming.com/resume</a>'
  },
  /**
   * 顶部栏
   * 用法和footer一样
   * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
   */
  title: {
    left: '最后更新时间：2018年7月',
    right: ''
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
    job: 'Web前端开发工程师',

    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是18, 17, 16
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
     * icon目前有以下几种： tell, blog, github, mail, qq, wechat
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
      title: '实践经历',
      content: [
        /**
         * 文章正文部分
         * left, right: 需要显示的文字，支持 b, i, a 等一切html标签，请自由配置
         * 同时提供以下几种样式配置方法
         * showDot：是否展示该段文字左边的小点。如果显示的话，这段文字将会往右缩进一丢丢
         * blod: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下blod的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          left: '重庆邮电大学 · 红岩网校工作站', 
          right: '2017.6 至今', 
          showDot: false,
          blod: true,
        },
        {
          left: '<strong>Web 研发部“技术总监”<small>（2018.6至今）</small></strong> 工作站成立于2000年，共有成员80余人( Web 研发部20+)，拥有PRD-UI-前后端开发-运营-迭代的完整开发流程。' + 
                '曾参与开发3个完整项目，同时参与上线维护、重构代码、增加可维护性等任务。', 
          right: '', 
          showDot: true,
        },
        {
          left: '重庆邮电大学 · 计算机通信重点实验室', 
          right: '2017.1 - 2017.6', 
          showDot: false,
          blod: true,
        },
        {
          left: '<strong>实验室成员</strong> 参与开发实验室的项目（前端4人后端10人）。使用<em>Git</em>进行版本控制，注重<em>代码可读性</em>，了解了多人合作项目的开发流程与规范。', 
          right: '', 
          showDot: true,
        },
      ]
    },



    {
      title: '个人作品',
      content: [
        {
          left: '个人技术博客', 
          right: '<a href="https://coderming.com" target="_blank">Link</a>', 
          showDot: false,
          blod: true,
        },
        {
          left: '16年12月起，开始以<em>coderming.com</em>作为个人域名，搭建并维护<em>Ghost</em>引擎的个人技术博客。' + 
                '利用<em>Nginx</em>反向代理实现了<em>https</em>站点。', 
          right: '', 
          showDot: true,
        },
        {
          left: 'StrongBox - 微信小游戏', 
          right: '<a href="https://github.com/RedrockTeam/xyx" target="_blank">Source</a>', 
          showDot: false,
          blod: true,
        },
        {
          left: '基于<em>Canvas</em>开发的微信小游戏。使用<em>原生 Canvas API</em>开发、完全<em>OOP</em>的编程思想，' + 
                '尝试着做性能优化和长宽比适配，同时在开发过程中同步更新踩坑文章。' + 
                '<strong>GitHub 上 60+ star、15+ watch，拥有软件著作权。</strong>', 
          right: '', 
          showDot: true,
        },
        {
          left: '重邮课表 - Übersicht插件',
          right: '<a href="https://github.com/CoderMing/cqupt-class.widget" target="_blank">Source</a> ' +
                 '<a href="http://tracesof.net/uebersicht-widgets/#cqupt-class_widget" target="_blank">Link</a>', 
          showDot: false,
          blod: true,
        },
        {
          left: '使用<em>NodeJS</em>获取数据制作的 Übersicht 插件。' + 
                '实现了课表显示、定时预报明日课表、缓存数据离线使用等功能。' +
                '<strong>上线1个月后，在 Übersicht 官方插件库中拥有了120+次下载量。</strong>',
          right: '', 
          showDot: true,
        },
        {
          left: '短链接生成API工具<small> (完善中)</small>', 
          right: '<a href="https://github.com/CoderMing/short-url-qrcode" target="_blank">Source</a> ',
          showDot: false,
          blod: true,
        },
        {
          left: '使用<em>NodeJS</em>制作的短链接生成API。' + 
                '实现了短链接及其二维码的生成、缓存等功能。',
          right: '', 
          showDot: true,
        },
      ]
    },



    {
      title: '奖项证书',
      content: [
        {
          left: '奖项', 
          right: '', 
          showDot: false,
          blod: true,
        },
        {
          left: '2018.5 &nbsp -&nbsp 蓝桥杯全国决赛C/C++ B组 · 优秀奖', 
          right: '国家级', 
          showDot: true,
          blod: false,
        },
        {
          left: '2017.10 &nbsp-&nbsp 重庆邮电大学ACM校赛 · 二等奖', 
          right: '校级', 
          showDot: true,
          blod: false,
        },
        {
          left: '重庆邮电大学单项奖学金 · 获得一次', 
          right: '校级', 
          showDot: true,
          blod: false,
        },
        {
          left: '证书', 
          right: '', 
          showDot: false,
          blod: true,
        },
        {
          left: '国家软件著作权证书', 
          right: '一份', 
          showDot: true,
          blod: false,
        },
      ]
    },
  ],





  sectionRight: [
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: '项目经验',
      content: [
        /**
         * 文章正文部分
         * article：需要显示的文字，支持 b, i, a 等一切html标签，请自由配置
         * 同时提供以下几种样式配置方法
         * showDot：是否展示该段文字左边的小点。如果显示的话，这段文字将会往右缩进一丢丢
         * blod: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下blod的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          left: '重庆邮电大学招生办公室 · 微信小程序', 
          right: '2017.6', 
          showDot: false,
          blod: true,
        },
        {
          left: '使用微信小程序原生框架进行开发。视图层采用<em>Flex弹性布局</em>，' + 
                '逻辑层采用模块化模式开发，减少耦合度。与后端配合采用<em>Restful API</em>进行开发，同时将配置参数抽取成单个模块文件便于修改。' + 
                '上线后进行后期维护及版本迭代。<strong>至今共有<em>5w+</em>用户、录取工作期间DAU<em>3.1k+</em>、总PV<em>220w+</em>，并成为“腾讯微校－高校微信排行榜西部明星”之一</strong>。', 
          right: '', 
          showDot: true,
        },
        {
          left: '重邮新生专题网 · PC端网页', 
          right: '<a href="https://github.com/CoderMing/Welcome2017" target="_blank">Source</a> ' +
                 '<a href="http://hongyan.cqupt.edu.cn/welcome/2017" target="_blank">Link</a> 2017.8', 
          showDot: false,
          blod: true,
        },
        {
          left: '拥有完整开发流程的桌面端页面。' + 
                '使用<em>LESS</em>作为CSS预处理器,<em>Gulp</em>实现开发流程自动化。前端开发周期15天，' + 
                '大量使用了<em>CSS3</em>的特性，动画实现采用<em>keyframes</em>强制GPU渲染，保证了页面的流畅度。开发过程与产品视觉进行沟通，对界面进行了精细的优化。' + 
                '<strong>上线一个月UV<em>6k+</em>，PV<em>2W+</em>。', 
          right: '', 
          showDot: true,
        }
      ]
    },



    {
      title: '专业技能',
      content: [
        {
          left: '掌握Web前端开发的基本技能，熟悉<em>页面布局架构</em>、<em>前端语义化</em>、<em>代码可维护性</em>等，略懂<em>浏览器兼容性</em>，有<em>1年+</em>的前端开发经验。', 
          right: '', 
          showDot: true,
        },
        {
          left: '对<em>Canvas</em>、<em>HTML5</em>、<em>CSS3</em>、<em>CSS预处理器</em>、<em>响应式布局</em>等有一定的理解，对<em>MV*框架</em>有简单的认知。', 
          right: '', 
          showDot: true,
        },
        {
          left: '对<em>性能优化</em>、<em>前端安全</em>、<em>ES6+</em>等有一定的了解，对<em>NodeJS</em>、<em>前端调试</em>有简单的认知。', 
          right: '', 
          showDot: true,
        },
        {
          left: '熟练使用<em>Git</em>进行版本控制和协作开发、<em>Markdown</em>进行文档编写，并以<em>macOS</em>、' + 
                '<em>Linux</em>、<em>VS Code</em>作为日常开发环境进行工作，了解项目开发流程，有多人协同开发的项目经验。', 
          right: '', 
          showDot: true,
        },
        {
          left: '熟悉<em>科学上网</em>、默认<em>Google</em>，能够看懂基本的英文文档。', 
          right: '', 
          showDot: true,
        },
        {
          left: '喜欢尝试新事物、关注各种新知识，有较强的学习能力及动手能力。', 
          right: '', 
          showDot: true,
        },
      ]
    },

  ],
  /**
   * 是否展示界面最下方 “模版 by CoderMing” 字样
   * 如果你认为在个人的页面上显示此条消息不合适，可以通过此方法快速消除
   * 什么？你 star 没给也好意思注释这一条？？？ :(
   */
  showAboutInfo: true
}

export default config
