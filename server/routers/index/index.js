module.exports = (router) => {
    router.get('/', async (ctx) => {
        // your code here...
        await ctx.render('index/index', {});
    });
};
