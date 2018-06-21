# 基于webpack4.x+koa的多页应用脚手架

## 说明
在一些有seo需求的场景下，spa的前端架构方式显然无法满足要求。这一套脚手架正是为了解决这样的问题。
> 目前只完成了基础部分，还有后端的错误处理，日志管理，等未完成

## 技术栈
||版本|
|:--:|:--:|
|nodejs |8.9.0|
|webpack | 4.11.1|
|koa | 2.5.1|


## 目录结构
|目录|说明|
|:--|:--|
|build/|构建相关配置以及工具函数|
|client/|前端开发文件夹|
|client/skins/|页面脚本css存放位置|
|client/src/|前端公用资源存放位置|
|config/|一些全局配置|
|log/|后端日志存放文件夹|
|server/|后端开发文件夹|
|server/libs/|后端公用脚本存放位置|
|server/routers|后端路由文件存放位置|
|index.js|项目启动入口文件|


## 运行方式
|命令|说明|
|:--|:--|
|npm install|安装依赖|
|npm run build:dev|开发环境打包|
|npm run dev|开发环境运行|
|npm run pro|开发环境打包运行(使用了pm2来启动项目，你需要全局安装pm2)|

## 开发说明
> 此脚手架是为了后端渲染而生的，因此开发需要分两个步骤

### 客户端
在文件夹 `client/skins/` 下新建文件夹`pagenew`,并且在其中新增
`index.tpl`,`index.js`,`index.scss`。
> 因为在多数情况下，html的head部分改动需求不大，我们只改动body中的html部分即可。在这里，只需要在index.tpl中直接写页面即可，js和css会自动对应到同级目录的index.tpl中，如果有需要修改`<head></head>`中的内容，可以在同级目录下新建head.tpl,在里面写入相应标签即可

### 服务端
在完成客户端部分的文件创建后，接着在server/routers/index.js中，加入如下代码
```javascript
router.get('/<%你要的路由名称%>', async(ctx, next) => {
    <%写入你的后端逻辑代码%>
    await ctx.render('pagenew/index', {<%传入参数%>});
});
```

### 重启项目
完成上述两步后，重启项目即可(如果需要自动重启，可以自行修改加入supervisor)

## 提示
本项目依赖全局的pm2,安装命令 `npm install -g pm2`

## todo
- 前端基础库，基础组件编写
- 后端工具库编写
- 后端监控日志，错误处理
- 命令参数定制化
- 自动化集成jenkins
