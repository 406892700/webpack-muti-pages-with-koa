/*
 * @Author: Simple
 * @Date: 2018-06-08 13:37:25
 * @Last Modified by: Simple
 * @Last Modified time: 2018-08-03 15:22:59
 */

const Koa = require('koa');

const logger = require('koa-logger');
const Router = require('koa-router');
const koaBody = require('koa-body');
const renderDev = require('./server/libs/renderDev');
const render = require('./server/libs/render');
// const fs = require('fs');
// const path = require('path');
const koaStatic = require('koa-static');
const gulp = require('gulp');
const webpack = require('webpack');

const router = new Router();
const app = new Koa();
const generateRouter = require('./server/routers/index');

const devConfig = require('./build/webpack.develop.config');
const { devMiddleware } = require('koa-webpack-middleware');
const hotMiddleware = require('./server/libs/hotMiddleware');
const errorHandlerMiddleware = require('./server/libs/internalErrorHandler');
const cors = require('@koa/cors');

const port = 9002;

app.use(logger());
app.use(koaBody());
app.use(cors());

const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境
  
// 开发环境
if (!isProd) {
    const compiler = webpack(devConfig);
    const hmw = hotMiddleware(compiler);
    const middleware = devMiddleware(compiler, {
        publicPath: devConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true,
        },
    });
    let reloadFlag = false;

    app.use(middleware);
    app.use(renderDev(middleware));
    app.use(hmw);

    compiler.plugin('compilation', (compilation) => {
        compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
            // console.log('html-webpack-plugin-after-emit')
            reloadFlag && hmw.hotMiddleware.publish({ action: 'reload' });
            reloadFlag = false;
            cb && cb();
        });
    });

    gulp.watch([
        './client/skins/**/*.tpl',
    ], (e) => {
        console.log(`${e.path} has ${e.type}, reload current page~`);
        reloadFlag = true;
    });
} else { // 正式环境
    app.use(render);
    app.use(koaStatic('./dist/client/skins/'));
}

// 错误处理
app.use(errorHandlerMiddleware);

// 生成路由
generateRouter(router);

app.use(router.routes()).use(router.allowedMethods());

// x-response-time
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// logger
// app.use(async (ctx, next) => {
//     const start = Date.now();
//     await next();
//     const ms = Date.now() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

app.use(async (ctx) => {
    // we need to explicitly set 404 here
    // so that koa doesn't assign 200 on body=
    ctx.status = 404;
  
    switch (ctx.accepts('html', 'json')) {
    case 'html':
        ctx.type = 'html';
        await ctx.render('error/index', {
            status: 404,
        });
        break;
    default:
        ctx.body = {
            message: 'Page Not Found',
        };
    }
});
  

// app.on('error', (err, ctx) => {
//     console.log(err);
//     ctx.status = 500;
//     ctx.render('error/index', {
//         status: 500,
//         errmsg: '服务器错误',
//     });
//     // ctx.body = 'djdjdjdjdjd';
// });

app.listen(port);
console.log(`DUIBA-H5-INTEGRAL listening on port ${port}`);
