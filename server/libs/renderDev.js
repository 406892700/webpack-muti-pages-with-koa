// const views = require('koa-views');
const views = require('./viewDevMiddleware');
const path = require('path');

// const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境
// const viewsDir = !isProd ? './client/skins/' : './dist/client/skins/';
const viewsDir = './dist/client/views/';
// console.log(path.join(__dirname, viewsDir));
module.exports = (webpackMiddleware) => {
    return views(path.resolve(process.cwd(), viewsDir), {
        suffix: 'html',
    }, webpackMiddleware);
};
