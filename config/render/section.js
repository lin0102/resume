/*
 * @Author: Lin
 * @Date: 2019-11-13 22:42:18
 * @LastEditTime: 2019-11-15 14:37:31
 * @Description: 修改原简历内容
 * @FilePath: \resume\config\render\section.js
 */
/**
 * 对文段的一个简单封装
 */
const p = (left = '', right = '') => {
  return { left, right }
}
/**
 * header
 * 默认将内容转为h4
 */
const h = (left = '', right = '') => {
  return { left: `#### ${left}`, right: `#### ${right}` }
}


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
         * left, right: 需要显示的文字，支持 b, i, a 等html标签以及一切markdown文本，请自由配置
         */

        p(`**重庆邮电大学 · 红岩网校工作站** [Link](https://hongyan.cqupt.edu.cn/aboutus/)`, `2018.8 至今`),
        p(`隶属校团委的学生互联网组织，成立于2000年，共有成员70余人，拥有 PRD-UI-前后端开发-运营-迭代的完整开发流程。`),
        p(`*红岩网校工作站 · Web研发部干事<small>（2018.8 - 2019.6）</small>* `),
        p(`*红岩网校工作站 · 站长<small>（2019.6 - 2020.6）</small>* `),
        p(`曾主持开发了网校若干前端项目，参与上线维护、代码重构、项目迁移/部署。`),
        p(`着力推动部门内开发流程优化与协作规范，促成了内部 matono、Sentry、前端 CI/CD 等平台的搭建以及飞书、蓝湖等团队协作平台的接入。`)
      ]
    },
    {
      title: '项目经历',
      content: [
        p(`**重邮小帮手(校团委官方微信服务号)**`),
        p(`校内学生关注率第一(90%+)的公众号`),
        p(`主管功能开发及人员调配，主持使用 Vue.js + ElementUI 重构内部公众号后台管理系统。`),
        p(`重构公众号内嵌四六级成绩查询功能，增加准考证信息自动识别 。`),
        p(`重构公众号内嵌课表查询功能，完成与掌上重邮 APP 的数据共通。`),
        p(`**“青春邮约”微信小程序**`),
        p(`校级组织线上报名系统`),
        p(`为同时在 QQ/微信端运行，整个项目借助 Taro 在原基础上重新构建，考虑到数据复杂度不高，使用 Context 进行数据管理。针对组织内部人员，使用 Ant Design 搭建后台页面，借助公众号/腾讯云短信业务进行录取信息推送。`),
        p(`*上线两天内 PV 27000+*`),
        p(`**重邮新生专题网**`, `[Source](https://wx.redrock.team/game/welcome2018/#/)`),
        p(`帮助新生快速了解校园的专题网站`),
        p(`此项目一年一版、拥有完整开发流程，我负责 2018 版 PC 端，也是做过的第一个完整项目，借助 git 和他人合作开发，使用了很多 CSS3 的特性。`),
        p(`*上线一月内 UV 6k+，PV 2w+。*`),
        p(`**重庆邮电大学“网址大全”**`, `[Source](https://hongyan.cqupt.edu.cn/web/)`),
        p(`服务于校内师生的内网一站式导航平台`),
        p(`刚接触 Vue 不久时完成，实现了根据配置文件动态生成站点内容。在项目实践中自己设计了一套简陋的轮播图组件。`),
        p(`未借助中后台框架独立完成配套后台管理页面的搭建，实践了大量数据结构知识。`),
        // h('博客 & 翻译', '[Link](https://www.coderming.com)'),
        // p('大二下开始写博文，内容比较杂，至今有十余篇。大三上参加了一个翻译志愿者团队，至今已参与翻译十余篇技术文章。'),
        // h('Blogsue - GitHub Issues 的博客前端页面', '[Source](https://github.com/coderming/blogsue)'),
        // p('为了提升 Github Issues 做博客的体验而开发的 SPA。使用 React 全家桶，填写配置文件即可生成对应界面。实现了移动端适配、黑夜模式、PWA 等功能。（Demo 可以看我的博客）'),
        // h('StrongBox - 微信小游戏', '[Source](https://github.com/RedrockTeam/xyx)'),
        // p('一个叠箱子的游戏。基于原生 Canvas API 开发（为了学习， 不是追求效率/效果），自行设计了运行逻辑，尽量实现低耦合和可拓展。尝试着做性能优化、长宽比适配，在开发过程中写了几篇踩坑文章。 **GitHub 上 80+ star、15+ watch，拥有软件著作权。** 让我实践了部分设计模式（由于不可抗因素，项目已下线无法使用）。'),
        // h('重邮课表 - Übersicht 插件', '[Source](https://github.com/CoderMing/cqupt-class.widget)'),
        // p('一个课表 Mac 桌面插件。具有课表显示、定时预报明日课表、缓存数据离线使用等功能。目前已有 100+ 人使用。')
      ]
    },
    {
      title: '个人作品',
      content: [
        h(`个人主页`),
        p(`以[nalgd.top](https://nalgd.top)作为个人域名，使用 rem + 仿 flexible.js 完成多端适配，iconfont 完成小图标制作。`),
        h(`个人博客`, `[Link](https://blog.nalgd.top)`),
        p(`折腾过WordPress、Jekyll，也尝试自己制作，最终选用 hexo 驱动，作为日常随笔记录，随性更新。`),
        h(`“独帅闯将营” · 微信小游戏`),
        p(`一款以中国象棋文化为背景的微信跑酷类小游戏，基于 LayaAir3D 引擎 + TypeScript 开发，仅为尝试 Web 技术在游戏开发方面的应用，以学习为主要目的，获得微信小程序应用开发赛（小游戏类别）全国三等奖。`)
      ]
    },
    {
      title: '个人能力',
      content: [
        p(`- *熟练掌握基本技能。* 熟悉 HTML5、CSS3、ES6+、响应式布局等，会基本的数据结构与算法。`),
        p('- *简单了解并实践过前端工程化。* 使用 Webpack 搭建过前端开发环境、写过简单的前端自动化脚本。使用 ESLint、Prettier 进行代码格式化。使用过 CSS 预处理语言。'),
        p('- *了解基本的代码调试、优化、前端安全。* 使用过异常监测工具、会使用 Chrome devTools 的基本功能、做过代理抓包调试、进行过代码优化。了解常见的前端安全隐患及防备措施。'),
        p('- *简单了解后端的基础知识。* 知道 HTTP(S) 协议、DNS 解析相关基础知识，使用过 CDN 服务。写过简单的 NodeJS Server，写过入门级的 Shell 脚本、配置过简单的 Nginx 服务器。'),
        p('- *简单了解当下热门的框架。* 简单了解 MV* 框架，简单了解 Vue 的基础知识和部分原理。'),
        p('- *奖项证书：* 国家级奖学金一次、校级奖学金一次；微信小程序应用开发赛（小游戏类别）全国三等奖'),
        p(`- *人事管理：* 管理过校内70余人的互联网团队。负责部门内人事调度，项目分配，项目进度跟踪，召开周会，学员培训，服务器维护等工作。`),
        p(`- *自我评价：* 时刻保持好奇心，具有一定的创新创造精神，持续关注业内前沿技术，有一定英文文档阅读能力。工作上积极执行有责任心，具有良好的沟通合作能力、分析解决问题能力以及较强的学习能力。`),
        p('- *日常开发环境：* Windows、VS Code，了解常用 Linux 命令、了解常用 Git 操作、熟悉 Markdown 语法，熟悉科学上网，默认 Google。'),
      ]
    }
  ]
