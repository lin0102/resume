# 📑 HTML 简历模版——SSR版

本简历模版是基于 `nuxt.js`，`stylus`，`pugjs` 而构建的 Vue SSR 网页简历模版。拥有以下特性：

- 一键生成PDF

- 可选插入微信二维码

- 全响应式

- 参数全在配置文件里，易于修改编辑

- 集成Gitalk评论系统

  

  线上demo： [简历 | 张德明](https://resume.coderming.com/)

使用方式

- 启动vue/cli自带的热更新开发server：

```shell
$ npm run dev
```

- 进入 `config `目录，修改 `config.js `里面的参数即可。具体配置方法在文件中有详细的注释帮助。若想进行自定义的修改的话，请进入 `components` 里修改组件代码。
- 修改完成后，使用npm命令输出成品：

```shell
$ npm run build
$ npm start
```

成品会放在dist文件夹内。



## 目录说明

```shell
├── README.md
├── assets
├── components // 组件存放处
├── config // 配置文件存放处
├── layouts 
├── middleware
├── nuxt.config.js
├── package.json
├── pages // 页面存放处（本app只有一个页面）
├── plugins
├── server // server代码
├── static // 静态文件
├── store 
└── styles // 样式文件
```



## 联系交流

如果有各种需求，请在本仓库提 issue 或者在简历的讨论区进行讨论。