module.exports = (router) => {
    router.get('/', async (ctx) => {
        // your code here...
        await ctx.render('index/index', {});
    });

    router.get('/api', async (ctx) => {
        ctx.body = {
            key: 123,
        };
    });
};
