module.exports = (router) => {
    router.get('/yyb/headbar', async (ctx) => {
        // your code here...
        await ctx.render('headBar/index', {});
    });
};
