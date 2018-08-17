module.exports = (router) => {
    router.get('/decorator', async (ctx) => {
        // your code here...
        await ctx.render('decorator/index', {});
    });
};
