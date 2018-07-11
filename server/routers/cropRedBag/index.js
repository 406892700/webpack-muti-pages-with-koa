module.exports = (router) => {
    router.get('/cropRedBag', async (ctx) => {
        // your code here...
        await ctx.render('cropRedBag/index', {});
    });
};
