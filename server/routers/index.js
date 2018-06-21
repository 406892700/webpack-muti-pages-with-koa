/*
 * 首页路由
 * @Author: Simple
 * @Date: 2018-06-19 15:52:25
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-21 19:42:03
 */

module.exports = (router) => {
    /**
     * 普通
     */
    router.get('/page1', async (ctx) => {
        await ctx.render('page1/index', { path: 'page1/index' });
    });

    /**
     * react
     */
    router.get('/react', async (ctx) => {
        await ctx.render('react/index', {});
    });

    /**
     * vue
     */
    router.get('/vue', async (ctx) => {
        await ctx.render('vue/index', {});
    });
};
