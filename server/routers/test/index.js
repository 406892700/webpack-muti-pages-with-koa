module.exports = (router) => {
    router.get('/test', async (ctx) => {
        // your code here...
        await ctx.render('test/index', {});
    });
};
