module.exports = (router) => {
    router.get('/sprite/demo', async (ctx) => {
        // your code here...
        await ctx.render('spriteDemo/index', {});
    });
};
