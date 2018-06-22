/*
 * 错误处理中间件
 * @Author: Simple
 * @Date: 2018-06-22 14:48:07
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-22 14:48:29
 */

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        await ctx.render('error/index', {
            status: 500,
            errmsg: 'Internal Server Error',
        });
    }
};
