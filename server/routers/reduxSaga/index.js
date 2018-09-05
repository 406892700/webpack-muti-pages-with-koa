module.exports = (router) => {
    router.get('/reduxSaga', async (ctx) => {
        // your code here...
        await ctx.render('reduxSaga/index', {});
    });
};
