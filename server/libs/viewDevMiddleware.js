/* eslint-disable */
const { resolve } = require('path')
const debug = require('debug')('koa-views')
const consolidate = require('consolidate')
const send = require('koa-send')
const getPaths = require('get-paths')
const pretty = require('pretty')
const ejs = require('ejs')

module.exports = viewsDevMiddleware

function viewsDevMiddleware(path, options = {
  suffix: 'html'
}, webpackMiddleware) {
  return function views(ctx, next) {
    if (ctx.render) return next()

    ctx.response.render = ctx.render = function(relPath, locals = {}) {
      relPath = /\.[^\.]+$/.test(relPath) ? relPath : relPath+'.'+options.suffix;
      const ramPath = resolve(path, relPath); // 拼装成内存中的路径
      const htmlTpl = webpackMiddleware.fileSystem.readFileSync(ramPath).toString();
      ejs.delimiter = '$';
      const parseTpl = ejs.render(htmlTpl, locals);
      debug('render `%s` with %j', relPath, locals);
      ctx.type = 'text/html';
      ctx.body = parseTpl;
    }

    return next()
  }
}

function isHtml(ext) {
  return ext === 'html'
}
