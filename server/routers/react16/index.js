module.exports = (router) => {
    router.get('/react16', async (ctx) => {
        // your code here...
        await ctx.render('react16/index', {});
    });
};
