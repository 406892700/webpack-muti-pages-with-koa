module.exports = (router) => {
    router.get('/hehe/haha', async (ctx) => {
        // your code here...
        await ctx.render('newTest/hehe/index', {});
    });
};
