module.exports = (router) => {
    router.get('/newmodule', async (ctx) => {
        // your code here...
        await ctx.render('newmodule/index', {});
    });
};
