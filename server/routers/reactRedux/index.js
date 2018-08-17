module.exports = (router) => {
    router.get('/reactRedux', async (ctx) => {
        await ctx.render('reactRedux/index', {});
    });

    // 延迟执行
    const delay = (time) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, time);
        });
    }

    router.get('/getRemoteData', async (ctx) => {
        ctx.headers = {
            contentType: 'text/json',
        };
        await delay(3000);

        ctx.body = {
            success: true,
            msg: '我是从服务端来的数据',
        };
        
    });
};
