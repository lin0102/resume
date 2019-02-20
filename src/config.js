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
    right:
      '<a href="https://resume.coderming.com" target="_blank">网页版简历：resume.coderming.com</a>',
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
    left: '最后更新时间：2018年12月9日',
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
    github: 'CoderMing',
    // 意向的工作
    // 建议不超过8个字
    job: '前端开发工程师',
    /**
     * 简介栏
     * 最多可以有三个
     * 字体大小依次是18, 17, 16
     * 建议区分各种信息的层级
     */
    profiles: [
      '男 · 1998.5',
      '重庆邮电大学 · 计算机科学与技术 · 20届本科',
      '大一开始自学前端 · 综合成绩前10%（18/278）'
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
         * bold: 该段文字是否加粗。注意，加粗后会有一点点上边距（一般情况下bold的行用于小标题）
         * 由于HTML的解析特性，如果想同时显示多个空格，请使用&nbsp
         */
        {
          left: '<strong>腾讯（深圳）PCG · 社交娱乐产品部</strong>',
          right: '2019.1 至今',
          showDot: false,
          bold: true
        },
        {
          left: '<b>实习生</b> 十余人的纯前端组，技术栈涉及 Node 较多。最大收获是体验到了公司内的开发流程及规范，以及多人协作、需求评审等校内很难锻炼到的能力。截至目前参与了 2 个项目的开发：',
          right: '',
          showDot: false
        },
        {
          left: '<b>内部运营系统：</b>Node 直出项目，MVC，我开发了配置系统中的一个页面。',
          right: '',
          showDot: true
        },
        {
          left: '<b>手Q 某 DAU 2千万 H5 项目：</b>项目采用内部自研 NodeJS Server 并配有专门的配置平台。' +
                '我负责开发了一个活动下线页中间件，可根据配置项识别 request URL 并跳转到过期页面。' +
                '中途为了性能优化写了个配置项缓存类，后面经过近一步完善发布到了团队公共组件库中。',
          right: '',
          showDot: true
        },
        {
          left: '重庆邮电大学 · 红岩网校工作站',
          right: '2017.6 至今',
          showDot: false,
          bold: true
        },
        {
          left:
            '<b>Web 研发部“技术总监”<small>（2018.6 至今）</small></b> 工作站成立于2000年，共有成员80余人（Web 研发部 20+），拥有 PRD-UI-前后端开发-运营-迭代的完整开发流程。' +
            '曾主持开发了网校内部前端项目通用的工具库以及 3 个完整项目，同时参与上线维护、重构代码、项目迁移/部署等任务。' +
            '',
          right: '',
          false: true
        },
        {
          left:
            '<a href="https://github.com/CoderMing/Welcome2017" target="_blank">Source</a> ' +
            '<a href="http://hongyan.cqupt.edu.cn/welcome/2017" target="_blank">Link</a>' + 
            '<b>重邮新生专题网 · PC 端网页：</b>' +
            '此项目是一年一版、拥有完整开发流程的桌面端页面。' +
            '我为 2017 版负责人，负责技术选型和大体逻辑搭建。' +
            '使用了很多 CSS3 的特性，同时在开发过程中与产品视觉进行沟通，对界面进行了精细的优化。' +
            '<strong>最终上线一个月 UV 6k+，PV 2w+。',
          right: '',
          showDot: true
        },
        {
          left: '重庆邮电大学招生办公室',
          right: '2017.5 至今',
          showDot: false,
          bold: true
        },
        {
          left:
            '<b>小程序开发者</b> 与老师合作开发了“重庆邮电大学招生办公室”小程序。采用 Flex 弹性布局，' +
            '代码模块化，接口为 REST API。' +
            '<strong>自 2017 年 6 月上线，至今共有 6w+ 用户、录取工作期间 DAU3.3k+、总 PV 520w+，并成为 “腾讯微校－高校微信西部明星” 之一</strong>。' +
            '这个项目技术实现并不难，但对当时（大一）的我意义很大：它让我了解了完整项目的流程，更让我踏入了实践的大门。目前主要的任务为后期维护及版本迭代。',
          right: '',
          showDot: false
        },
        {
          left: '重庆邮电大学 · 计算机通信实验室',
          right: '2016.12 - 2017.6',
          showDot: false,
          bold: true
        },
        {
          left:
            '<b>实验室成员</b> 参与开发前端 4 人后端 10 人的项目。使用 Git 进行版本控制。' +
            '当时资历尚浅只是打杂，技术层面长进并不多，主要收获是对前端有了更全面的认识、确定了自己的学习的路径。',
          right: '',
          showDot: false
        }
      ]
    },

    {
      title: '奖项证书',
      content: [
        {
          left: '18 年 5 月 · 蓝桥杯区域赛 C/C++ B 组一等奖',
          right: '',
          showDot: true,
          bold: false
        },
        {
          left: '18 年 12 月 · 腾讯WXG x SF 微信小程序 Hackathon 打杂奖',
          right: '',
          showDot: true,
          bold: false
        },
        {
          left: '校级单项奖学金获得两次、ACM 校赛二等奖、软著一份。',
          right: '',
          showDot: true,
          bold: false
        },
        {
          left: '文体、双创类比赛省奖 6 次。',
          right: '',
          showDot: true,
          bold: false
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
      title: '个人作品',
      content: [
        {
          left: '写了点博文，翻译了些文章',
          right:
            '<a href="https://www.coderming.com/" target="_blank">Link</a> ',
          showDot: false,
          bold: true
        },
        {
          left:
            '大二下开始写博文，内容比较杂，至今有十余篇。从 2018 年 8 月起，开始参与翻译社区内的英文文章。至今主持翻译文章 8 篇、参与校对十余篇，内容涉及前端范围内的基础文档及前沿知识。学习知识贡献社区的同时也锻炼了英文阅读能力。',
          right: '',
          showDot: true
        },
        {
          left: 'Blogsue - GitHub Issues 的博客前端页面',
          right:
            '<a href="https://coderming.com" target="_blank">Link</a> ' +
            '<a href="https://github.com/coderming/blogsue" target="_blank">Source</a>',
          showDot: false,
          bold: true
        },
        {
          left:
            '为了提升 Github Issues 做博客的体验而开发的 SPA。使用 React 全家桶，填写 config 即可生成对应界面。' +
            '实现了移动端适配、黑夜模式、PWA、配置文件抽离等功能。收获了 React 的项目开发经验。（Demo 可以看我的博客）',
          right: '',
          showDot: true
        },
        {
          left: 'StrongBox - 微信小游戏',
          right: '<a href="https://github.com/RedrockTeam/xyx" target="_blank">Source</a>',
          showDot: false,
          bold: true
        },
        {
          left:
            '一个叠箱子的游戏。基于原生 Canvas API 开发，自行设计了运行逻辑，尽量实现低耦合和可拓展。' +
            '尝试着做性能优化、长宽比适配，中途针对性能和展示效果和产品视觉进行了很多沟通协调及权衡，在开发过程中写了几篇踩坑文章。' +
            '<strong>GitHub 上 80+ star、15+ watch，拥有软件著作权。</strong>同时让我熟悉了性能调试，并实践了部分设计模式（由于某些原因，项目已下线无法使用）。',
          right: '',
          showDot: true
        },
        {
          left: '重邮课表 - Übersicht插件',
          right:
            '<a href="https://github.com/CoderMing/cqupt-class.widget" target="_blank">Source</a> ',
          showDot: false,
          bold: true
        },
        {
          left:
            '一个课表 Mac 桌面插件。具有课表显示、定时预报明日课表、缓存数据离线使用等功能。',
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
            '<b>熟练掌握基本技能。</b>熟悉 HTML5、CSS3、ES6+、正则、响应式布局等，略懂 Canvas。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>简单了解并实践过前端工程化。</b>写过 Webpack、Gulp 的插件、写过简单的前端自动化脚本、发布过 npm 包。使用过 Babel、CSS 预处理器、Lint。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>了解基本的代码调试、优化、前端安全。</b>使用过性能监测工具、会使用 Chrome devTools 的基本功能、做过抓包调试、进行过代码优化。了解常见的前端安全隐患及简单的防备措施。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>简单了解后端的基础知识。</b>知道 HTTP(S) 协议、DNS 解析相关基础知识，使用过 CDN 服务。写过简单的 NodeJS Server，写过入门级的 Shell 脚本、配置过简单的 Nginx 服务器。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>简单了解当下热门的框架，了解前端组件化。</b>看过 Underscore 的源码，简单了解 MV* 框架，了解 React 的基础知识和部分原理。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>其它：</b>非技术类书籍（主要为传记/纪实类）年阅读量约 20 本、大学期间穷游了六个省、待过院辩论队、负责管理过校园内几十人的团队。喜欢与人交流、乐意在不同领域折腾，对自己日后的发展有较明确的规划。',
          right: '',
          showDot: true
        },
        {
          left: '日常开发环境为 macOS、VS Code，使用 Linux、Git、Markdown，默认 Google。',
          right: '',
          showDot: true
        }
      ]
    },
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
