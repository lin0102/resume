/**
 * 简历内容配置文件
 * @author CoderMing
 * https://github.com/coderming
 * 若想修改样式的配置参数，请修改同目录下的 config.styl 文件
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
  printName: '张德明-前端-20届',
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
    right:
      '<a href="https://coderming.com/resume" target="_blank">网页版简历（带作品链接）：coderming.com/resume</a>'
  },
  /**
   * 顶部栏
   * 用法和footer一样
   * 不同的是，顶部栏不会出现在打印页面以及pad和手机端
   */
  title: {
    left: '最后更新时间：2018年9月16日',
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
      '男 / 2020年毕业',
      '重庆邮电大学 · 计算机科学与技术',
      '一年半前端学习经验 / 综合成绩前 10% (18/278)'
    ],
    /**
     * 信息栏
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
      { address: 'coderming.com', type: 'blog' },
      { address: 'github.com/coderming', type: 'github' },
      { address: 'coderming@foxmail.com', type: 'mail' },
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
   * 正文部分
   * 说明：本模版采用两栏式显示
   * 分别呢 sectionLeft 和 sectionRight
   * 两栏的东西不会合并显示
   * 如果你想只显示一栏，请删除sectionRight字段，会自动变为sectionLeft的单行显示
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
          blod: true
        },
        {
          left:
            '<strong>Web 研发部“技术总监”<small>（2018.6至今）</small></strong> 工作站成立于2000年，共有成员80余人( Web 研发部20+)，拥有PRD-UI-前后端开发-运营-迭代的完整开发流程。' +
            '我曾主持或参与开发5个完整项目，同时参与上线维护、重构代码、项目迁移/部署等任务。',
          right: '',
          showDot: true
        },
        {
          left: '重庆邮电大学 · 计算机通信重点实验室',
          right: '2017.1 - 2017.6',
          showDot: false,
          blod: true
        },
        {
          left:
            '<strong>实验室成员</strong> 大一上和老师沟通加入的实验室。进入后参与开发前端4人后端10人的项目。使用<em>Git</em>进行版本控制，注重<em>代码可读性</em>。' +
            '当时资历尚浅况且任务大多是修 bug，技术层面长进并不多，主要收获是对前端有了个更全面的认识，确定了自己的学习的路径，也简单了解了多人合作项目的开发流程与规范。',
          right: '',
          showDot: true
        }
      ]
    },

    {
      title: '个人作品',
      content: [
        {
          left: '掘金翻译计划 - 前端方向志愿者',
          right:
            '<a href="https://www.coderming.com/label/%E7%BF%BB%E8%AF%91" target="_blank">Link</a> ' +
            '<a href="https://github.com/xitu/gold-miner" target="_blank">Source</a> ',
          showDot: false,
          blod: true
        },
        {
          left:
            '从2018年8月起，开始参与翻译社区内的英文文章。至今主持翻译文章 4 篇、参与校对 9 篇，内容涉及前端范围内的基础文档及前沿知识。学习知识贡献社区的同时也锻炼了英文阅读能力。',
          right: '',
          showDot: true
        },
        {
          left: 'Blogsue - 基于 GitHub Issues 的博客系统',
          right:
            '<a href="https://coderming.com" target="_blank">Link</a> ' +
            '<a href="https://github.com/coderming/blogsue" target="_blank">Source</a>',
          showDot: false,
          blod: true
        },
        {
          left:
            '为了处理 Github Issues 做博客的诸多缺点（例如不能自定义界面）而开发的 SPA。数据源自自定义配置的 GitHub 仓库的 Issues。使用<em>React全家桶</em>和<em>Gitalk</em>。' +
            '实现了移动端适配、黑夜模式、<em>PWA</em>、<em>Docker构建</em>、配置文件抽离等功能。收获了<em>React</em>的项目开发经验。（Demo 可以看我的博客）',
          right: '',
          showDot: true
        },
        {
          left: 'StrongBox - 微信小游戏',
          right: '<a href="https://github.com/RedrockTeam/xyx" target="_blank">Source</a>',
          showDot: false,
          blod: true
        },
        {
          left:
            '一个叠箱子的游戏。基于<em>原生 Canvas API</em>开发，自行设计了运行逻辑，实现了低耦合和可拓展。' +
            '尝试着做<em>性能优化</em>、长宽比适配，中途针对性能和展示效果和产品视觉进行了很多沟通协调及权衡。在开发过程中同步更新踩坑文章。' +
            '<strong>GitHub 上 60+ star、15+ watch，拥有软件著作权。</strong>同时让我熟悉了<em>性能调试</em>，并实践了部分<em>设计模式</em>（由于某些原因，项目已下线无法使用）。',
          right: '',
          showDot: true
        },
        {
          left: '短链接生成API工具',
          right:
            '<a href="https://github.com/CoderMing/short-url-qrcode" target="_blank">Source</a> ',
          showDot: false,
          blod: true
        },
        {
          left:
            '为了学习<em>NodeJS</em>，制作了这个短链接生成 API。' +
            '实现了短链接及其二维码的生成功能。期间踩了很多坑 (例如<em>CORS</em>)，学习到了一个简单的 NodeJS API 后台是怎么运行的。',
          right: '',
          showDot: true
        },
        {
          left: '其它作品',
          right: '',
          showDot: false,
          blod: true
        },
        {
          left:
            '<a href="https://github.com/CoderMing/cqupt-class.widget" target="_blank">重邮课表 - Übersicht插件</a> ' +
            '一个课表 Mac 桌面插件。具有课表显示、定时预报明日课表、缓存数据离线使用等功能。',
          right: '',
          showDot: true
        },
        {
          left:
            '<a href="https://github.com/CoderMing/resume" target="_blank">HTML简历生成模版</a> ' +
            'Vue 组件化开发，填写 config 即生成对应简历。进行了移动端适配、打印样式适配、配色自定义、代码语义化。（本简历就是一个 Demo）',
          right: '',
          showDot: true
        }
      ]
    }
  ],

  /**
   * 若想仅显示单行，请删除此属性
   */
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
          blod: true
        },
        {
          left:
            '我的第一个真正的作品。与老师合作开发，<em>Flex弹性布局</em>，' +
            '代码模块化，接口为<em>Rest API</em>，在人性化操作上下了很多功夫。上线后进行后期维护及版本迭代。' +
            '<strong>至今共有<em>5w+</em>用户、录取工作期间DAU<em>3.3k+</em>、总PV<em>410w+</em>，并成为“腾讯微校－高校微信排行榜西部明星”之一</strong>。这个项目技术实现并不难，但对我意义很大：它让我了解了完整项目的流程，更让我踏入了实践的大门。',
          right: '',
          showDot: true
        },
        {
          left: '重邮新生专题网 · PC端网页',
          right:
            '<a href="https://github.com/CoderMing/Welcome2017" target="_blank">Source</a> ' +
            '<a href="http://hongyan.cqupt.edu.cn/welcome/2017" target="_blank">Link</a> 2017.8',
          showDot: false,
          blod: true
        },
        {
          left:
            '此项目是一年一版，拥有完整开发流程的桌面端页面。' +
            '我为 2017 版负责人，负责技术选型和大体逻辑搭建。' +
            '为了达到视觉的效果并保证性能，我大量使用了<em>CSS3</em>的特性并强制GPU渲染，同时在开发过程与产品视觉进行沟通，对界面进行了精细的优化。' +
            '<strong>最终上线一个月UV<em>6k+</em>，PV<em>2w+</em>。',
          right: '',
          showDot: true
        }
      ]
    },

    {
      title: '专业技能',
      content: [
        {
          left:
            '<b>熟练掌握基本技能。</b>熟悉<em>HTML5</em>、<em>CSS3</em>、<em>ES6+</em>、<em>正则</em>、<em>响应式布局</em>等，略懂<em>Canvas</em>。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>会使用各类工具，简单了解前端工程化。</b>写过<em>Webpack</em>、<em>Gulp</em>的插件。写过简单的前端自动化脚本。经常使用<em>Babel</em>、<em>CSS 预处理器 (Stylus)</em>、<em>Lint (Prettier)</em>，尝试使用（仅使用）过<em>模版引擎 (pug)</em>、<em>TypeScript</em>、<em>Docker</em>、<em>测试工具 (Jest)</em>。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>了解基本的代码调试、优化、前端安全。</b>使用过性能监测工具，会使用<em>Chrome devTools</em>的基本功能，进行过代码优化。了解常见的前端安全隐患及简单的防备措施。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>简单了解后端的基础知识。</b>知道<em>HTTP(S) 协议</em>、<em>DNS 解析</em>相关基础知识，使用过<em>CDN</em>服务。写过入门级的<em>Shell 脚本</em>、配置过简单的<em>Nginx 服务器</em>，用过<em>NodeJS</em>、发布过<em>npm</em>包。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>简单了解当下热门的框架，了解前端组件化。</b>看过<em>Underscore</em>的源码，简单了解<em>MV*</em>框架，了解<em>React</em>的基础知识和部分原理（也是目前主要学习方向）。简单地使用过<em>Vue</em>。',
          right: '',
          showDot: true
        },
        {
          left:
            '<strong>非技术方面：</strong>喜欢看书（传记/纪实类）、喜欢旅行、日常健身 。经常在小团队中担任管理及决策者，喜欢与人交流，自认为有责任心。<b>对自己日后的发展有较明确的方向。</b>',
          right: '',
          showDot: true
        },
        {
          left:
            '日常开发环境为 macOS、 VS Code，使用<em>Linux</em>、<em>Git</em>、<em>Markdown</em>，默认 Google。',
          right: '',
          showDot: true
        }
      ]
    },

    {
      title: '奖项证书',
      content: [
        // {
        //   left: '奖项',
        //   right: '',
        //   showDot: false,
        //   blod: true,
        // },
        {
          left: '2018.5 &nbsp -&nbsp 蓝桥杯全国决赛C/C++ B组 · 优秀奖',
          right: '国家级',
          showDot: true,
          blod: false
        },
        {
          left: '2017.10 &nbsp-&nbsp 重庆邮电大学ACM校赛 · 二等奖',
          right: '校级',
          showDot: true,
          blod: false
        },
        {
          left: '重庆邮电大学单项奖学金 · 获得一次',
          right: '校级',
          showDot: true,
          blod: false
        },
        {
          left: '国家软件著作权证书',
          right: '一份',
          showDot: true,
          blod: false
        }
      ]
    }
  ],

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
