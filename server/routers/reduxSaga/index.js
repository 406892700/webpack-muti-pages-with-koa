module.exports = (router) => {
  router.get('/reduxSaga', async (ctx) => {
    // your code here...
    await ctx.render('reduxSaga/index', {});
  });

  const delay = (time) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, time);
    });
  };

  router.get('/api/reduxSaga/index', async (ctx) => {
    await delay(2000);
    ctx.body = {
      code: 200,
      data: {
        list: [{
          name: 'simple',
          age: 26,
        }, {
          name: 'simple',
          age: 26,
        }, {
          name: 'simple',
          age: 26,
        }, {
          name: 'simple',
          age: 26,
        }, {
          name: 'simple',
          age: 26,
        }],
      },
    };
  });

  router.get('/api/reduxSaga/list', async (ctx) => {
    ctx.body = {
      code: 200,
      data: {
        result: 123,
      },
    };
  });
};
