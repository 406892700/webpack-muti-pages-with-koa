module.exports = (router) => {
    router.get('/redux', async (ctx) => {
        // your code here...
        await ctx.render('redux/index', {});
    });
};
