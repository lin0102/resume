# 📑 HTML 简历模版

本简历模版是基于`vue/cli`，`stylus`，`pugjs`而构建的html网页简历模版。拥有以下特性：

- 一键生成PDF
- 可选插入微信二维码
- 全响应式
- 参数全在配置文件里，易于修改编辑
- 支持Docker自动构建



线上demo： [简历 | 张德明](https://www.coderming.com/resume/)

 

### 使用方式

- 启动vue/cli自带的热更新开发server：

```
$ npm run serve
```

- 进入`src`目录，修改`config.js`里的参数即可。无需修改其他。若想进行更大的修改的话，请进入`src/components`里修改代码。
- 修改完成后，使用npm命令输出成品：

```
$ npm run build
```

成品会放在dist文件夹内。

### Docker构建
- 在仓库根目录下，运行以下命令：

```
$ docker build -t 镜像名 .
```

- 默认采用容器的8080端口。所以创建并运行容器可以运行以下命令：

```
$ docker run --name 容器名 -d -p 主机的端口名:8080 镜像名
```

tips: 默认采用 `node v8.x` 的底包。


### 目录说明

```
/resume
├── README.md
├── dist     // 生成文件目录
├── package-lock.json
├── package.json
├── public // 公共文件目录，无需操作
|  ├── favicon.ico
|  └── index.html
├── src   // 代码目录
|  ├── App.vue //vue输出文件
|  ├── components  //vue模版们
|  ├── config.js   //本简历的配置参数
|  ├── main.js  //打包入口
|  ├── static //微信二维码存放地
|  └── styles  //样式文件
└── vue.config.js   //vue-cli配置文件
```



### 来源

本简历模版部分借鉴了[@Cong Min](https://github.com/mcc108/resume)的样式。

实现代码全为本人书写。



### 联系交流

如果有各种需求，请在本仓库提issue。