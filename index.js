/*
 * @Author: Simple
 * @Date: 2018-06-08 13:37:25
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-20 15:32:09
 */

const Koa = require('koa');

const logger = require('koa-logger');
const Router = require('koa-router');
const koaBody = require('koa-body');
const renderDev = require('./server/libs/renderDev');
const render = require('./server/libs/render');
const path = require('path');
const koaStatic = require('koa-static');
const gulp = require('gulp');
const webpack = require('webpack');

const router = new Router();
const app = new Koa();
const generateRouter = require('./server/routers/index');

const port = 9002;

app.use(logger());
app.use(koaBody());

const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

// app.use(async(ctx, next) => {
//     try {
//       await next()
//       const status = ctx.status || 404
//       if (status === 404) {
//           ctx.throw(404)
//       }
//     } catch (err) {
//       ctx.status = err.status || 500
//       if (ctx.status === 404) {
//         //Your 404.jade
//         await ctx.render('404')
//       } else {
//         //other_error jade
//         await ctx.render('other_error')
//       }
//     }
//   });
  
// 开发环境
if(!isProd) {
    const devConfig = require('./build/webpack.develop.config');
    const { devMiddleware } = require('koa-webpack-middleware');
    const hotMiddleware = require('./server/libs/hotMiddleware');
    const compiler = webpack(devConfig);
    const hmw = hotMiddleware(compiler);
    const middleware = devMiddleware(compiler, {
        publicPath: devConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true,
        }
    });
    let reloadFlag = false;

    app.use(middleware);
    app.use(renderDev(middleware));
    app.use(hmw);

    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
            console.log('html-webpack-plugin-after-emit')
            reloadFlag && hmw.hotMiddleware.publish({ action: 'reload' });
            reloadFlag = false;
            cb && cb()
        });
    });

    gulp.watch([
        './client/skins/**/*.tpl'
    ], (e) => {
        console.log(`${e.path} has ${e.type}, reload current page~`);
        reloadFlag = true;
    });
} else { // 正式环境
    app.use(render);
    app.use(koaStatic('./dist/client/skins/'));
}

// 生成路由
generateRouter(router);

app
  .use(router.routes())
  .use(router.allowedMethods());

// x-response-time
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.listen(port);
console.log('DUIBA-H5-INTEGRAL listening on port ' + port);
