// const views = require('koa-views');
const views = require('koa-views');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境
const viewsDir = !isProd ? './client/skins/' : './dist/client/skins';
// console.log(path.join(__dirname, viewsDir));
module.exports = views(path.resolve(process.cwd(), viewsDir), {
    map: { html: 'ejs' },
});
