/*
 * 首页路由
 * @Author: Simple
 * @Date: 2018-06-19 15:52:25
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-22 14:45:52
 */

module.exports = (router) => {
    /**
     * 普通
     */
    router.get('/page1', async (ctx) => {
        const arr = [1, 2];
        await ctx.render('page1/index', { number: arr[2].name });
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
