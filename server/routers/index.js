/*
 * 首页路由
 * @Author: Simple
 * @Date: 2018-06-19 15:52:25
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-19 15:53:10
 */

module.exports = (router) => {
    router.get('/', async(ctx, next) => {
        await ctx.render('page2/index', {key: 222});
    });
}