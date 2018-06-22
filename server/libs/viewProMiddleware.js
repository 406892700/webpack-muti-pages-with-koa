/* eslint-disable */
'use strict'

const { resolve } = require('path')
const debug = require('debug')('koa-views')
const consolidate = require('consolidate')
const ejs = require('ejs')
const fs = require('fs');

module.exports = viewsMiddleware

function viewsMiddleware(
  path,
  options = {
    suffix: 'html'
  }
) {
  return function views(ctx, next) {
    if (ctx.render) return next()

    ctx.response.render = ctx.render = function(relPath, locals = {}) {
        relPath = /\.[^\.]+$/.test(relPath) ? relPath : relPath+'.'+options.suffix;
        const ramPath = resolve(path, relPath); // 拼装成内存中的路径
        const htmlTpl = fs.readFileSync(ramPath).toString();
        ejs.delimiter = '$';
        const parseTpl = ejs.render(htmlTpl, locals);
        debug('render `%s` with %j', relPath, locals);
        ctx.type = 'text/html';
        ctx.body = parseTpl;
    }

    return next()
  }
}
