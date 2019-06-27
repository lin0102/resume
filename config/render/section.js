
/**
 * 正文部分
 * 说明：本模版在pc端和打印端采用两栏式显示，手机端采用单栏
 * 请自己判断并适应页面尺寸
 */
export default [
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
          left: '<strong>阿里巴巴（杭州）· 淘宝前端团队（FED）</strong>',
          right: '2019.5 至今',
          showDot: false,
          bold: true
        },
        {
          left:
            '<b>实习生</b> ...',
          right: '',
          showDot: false
        },
        {
          left: '<strong>腾讯（深圳）PCG · 社交娱乐产品部</strong>',
          right: '2019.1 - 2019.3',
          showDot: false,
          bold: true
        },
        {
          left:
            '<b>实习生</b> 十余人的纯前端组，技术栈涉及 Node 较多。最大收获是体验到了公司内的开发流程及规范，以及多人协作、需求评审等校内很难锻炼到的能力。共参与了 3 个项目的开发：',
          right: '',
          showDot: false
        },
        {
          left: '<b>内部运营系统：</b>Node 直出项目，MVC，负责开发了几个页面。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>手Q 某 DAU 2000w H5 项目：</b>项目采用内部自研 NodeJS Server 并配有专门的配置平台。' +
            '我负责开发了一个活动下线页中间件，可根据配置项识别 Request URL 并跳转到指定页面。' +
            '中途为了性能优化写了个配置项缓存类，后面经过近一步完善（支持多进程复用）后发布到了团队公共组件库中。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>企业微信机器人消息模块：</b><strong>个人独立负责。</strong>帮助管理人员在操作配置平台时周知其他成员，以及快捷查找组内文档。' +
            '自己实现的订阅者模式，支持简易的自定义模版，支持简易的模糊搜索。',
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
            '<a href="http://hongyan.cqupt.edu.cn/welcome/2017" target="_blank">Link</a> ' +
            '<b>重邮新生专题网 · PC 端网页：</b>' +
            '此项目是一年一版、拥有完整开发流程的桌面端页面，我为 2017 版负责人。' +
            '开发中使用了很多 CSS3 的特性，同时在开发过程中与产品视觉进行沟通，对界面进行了精细的优化。' +
            '<strong>最终上线一个月 UV 6k+，PV 2w+。',
          right: '',
          showDot: true
        },
        {
          left: '重庆邮电大学 · 校招生办公室',
          right: '2017.5 至今',
          showDot: false,
          bold: true
        },
        {
          left:
            '<b>开发者</b> 与老师一起做小程序以及每年的新生数据分析等事物。这也是我在大学开始独立承担任务的地方。',
          right: '',
          showDot: false
        },
        {
          left:
            '<strong>重庆邮电大学招生办公室 · 微信小程序：</strong>为提高高考填报志愿期间学校的服务质量，与老师合作开发的小程序。采用 Flex 弹性布局，' +
            '代码模块化，接口为 REST API。' +
            '<strong>2017 年 6 月上线至今共有 6w+ 用户、录取工作期间 DAU 3.3k+、总 PV 520w+，并成为 “腾讯微校－高校微信西部明星” 之一</strong>。' +
            '这个项目技术实现并不难，但它让当时（大一）的我学会如何制作一个完整的项目，让我踏入了实践的大门。目前主要的任务为后期维护。',
          right: '',
          showDot: true
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
            '当时（大一）资历尚浅只是打杂，主要收获是对前端有了更全面的认识、确定了自己的学习路径。',
          right: '',
          showDot: false
        }
      ]
    },
    /**
     * 每一个小模块，都有以下几个配置项：
     * title： 顶部名称栏
     * content: 里面的内容，需要注意的是每一条内容都会换行
     */
    {
      title: '个人作品',
      content: [
        {
          left: '博客 & 翻译',
          right: '<a href="https://www.coderming.com/" target="_blank">Link</a> ',
          showDot: false,
          bold: true
        },
        {
          left:
            '大二下开始写博文，内容比较杂，至今有十余篇。大三上参加了一个翻译志愿者团队，至今已参与翻译十余篇技术文章。',
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
            '为了提升 Github Issues 做博客的体验而开发的 SPA。使用 React 全家桶，填写配置文件即可生成对应界面。' +
            '实现了移动端适配、黑夜模式、PWA 等功能。（Demo 可以看我的博客）',
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
            '尝试着做性能优化、长宽比适配，中途针对性能和展示效果和产品视觉进行了沟通及权衡，在开发过程中写了几篇踩坑文章。' +
            '<strong>GitHub 上 80+ star、15+ watch，拥有软件著作权。</strong>同时让我熟悉了性能调试，并实践了部分设计模式（由于不可抗因素，项目已下线无法使用）。',
          right: '',
          showDot: true
        },
        {
          left: '重邮课表 - Übersicht 插件',
          right:
            '<a href="https://github.com/CoderMing/cqupt-class.widget" target="_blank">Source</a> ',
          showDot: false,
          bold: true
        },
        {
          left:
            '一个课表 Mac 桌面插件。具有课表显示、定时预报明日课表、缓存数据离线使用等功能。目前已有 100+ 人使用。',
          right: '',
          showDot: true
        }
      ]
    },

    {
      title: '个人能力',
      content: [
        {
          left:
            '<b>熟练掌握基本技能。</b>熟悉 HTML5、CSS3、ES6+、正则、响应式布局等，略懂 Canvas，会基本的数据结构与算法。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>简单了解并实践过前端工程化。</b>写过 Webpack、Gulp 的插件（自用）、写过简单的前端自动化脚本、发布过 npm 包。使用过 Babel、CSS 预处理器、Lint。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>了解基本的代码调试、优化、前端安全。</b>使用过性能监测工具、会使用 Chrome devTools 的基本功能、做过代理抓包调试、进行过代码优化。了解常见的前端安全隐患及防备措施。',
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
            '<b>简单了解当下热门的框架。</b>看过 Underscore 的源码，简单了解 MV* 框架，简单了解 Vue/React 的基础知识和部分原理。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>其它：</b>非技术类书籍（主要为传记/纪实类）年阅读量约 20 本、大学期间穷游了六个省，待过院辩论队、当过班委、拿过校级优秀学生干部、负责管理过校园内几十人的团队。',
          right: '',
          showDot: true
        },
        {
          left:
            '<b>奖项证书：</b>蓝桥杯省赛 C/C++ B 组一等奖，腾讯WXG x SF 微信小程序 Hackathon 打杂奖，校级单项奖学金获得两次、ACM 重庆市赛二等奖、软著一份。文体、双创类比赛省奖 6 次。',
          right: '',
          showDot: true
        },
        {
          left: '日常开发环境为 macOS、VS Code，使用 Linux、Git、Markdown，默认 Google。',
          right: '',
          showDot: true
        }
      ]
    }
  ]
