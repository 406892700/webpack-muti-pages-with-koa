// const views = require('koa-views');
const views = require('koa-views');
const path = require('path');

const viewsDir = './dist/client/views';
// console.log(path.join(__dirname, viewsDir));
module.exports = views(path.resolve(process.cwd(), viewsDir), {
    map: { html: 'ejs' },
});
