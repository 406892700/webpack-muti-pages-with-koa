module.exports = (router) => {
    /**
     * 普通
     */
    router.get('/normal', async (ctx) => {
        // 尝试报错的提示
        const arr = [1, 2];
        await ctx.render('normal/index', { number: arr[2].name });
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
