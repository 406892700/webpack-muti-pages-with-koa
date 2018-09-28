module.exports = (router) => {
    router.get('/xmTest', async (ctx) => {
        // your code here...
        await ctx.render('xmTest/index', {});
    });
};
