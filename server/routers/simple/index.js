module.exports = (router) => {
    router.get('/simple', async (ctx) => {
        // your code here...
        await ctx.render('simple/index', {});
    });
};
