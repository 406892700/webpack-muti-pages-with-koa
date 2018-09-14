module.exports = (router) => {
  router.get('/reactReduxAsync', async (ctx) => {
    await ctx.render('reactReduxAsync/index', {});
  });
};
