module.exports = (router) => {
    router.get('/cropRedBag/plugin', async (ctx) => {
        // your code here...
        await ctx.render('cropRedBagPlugin/index', {});
    });
};
