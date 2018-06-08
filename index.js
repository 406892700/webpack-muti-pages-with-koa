const Koa = require('koa');
const app = new Koa();
const port = 9002;

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
  });
  
  // logger
  
  app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  });
  
  // response
  
  app.use(async ctx => {
    ctx.body = {
        data: {
            key: 123
        },
        success: true
    };
  });
  
  app.listen(port);
  console.log('DUIBA-H5-INTEGRAL listening on port '+port);