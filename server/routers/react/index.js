module.exports = (router) => {
  router.get('/react', async (ctx) => {
      // your code here...
      await ctx.render('react/index', {});
  });
};
