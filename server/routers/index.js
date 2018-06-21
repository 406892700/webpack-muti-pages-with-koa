/*
 * 首页路由
 * @Author: Simple
 * @Date: 2018-06-19 15:52:25
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-21 18:59:11
 */

module.exports = (router) => {
    router.get('/page1', async (ctx) => {
        await ctx.render('page1/index', { path: 'page1/index' });
    });

    router.get('/page2', async (ctx) => {
        await ctx.render('page2/index', {});
    });

    router.get('/page3', async (ctx) => {
        await ctx.render('page3/index', {});
    });

    router.get('/page4', async (ctx) => {
        await ctx.render('page4/index', {});
    });
};
