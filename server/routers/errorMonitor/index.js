
const querystring = require('querystring');
const fs = require('fs');

module.exports = (router) => {
    router.get('/monitor', async (ctx) => {
        // your code here...
        await ctx.render('errorMonitor/index', {});
    });

    router.get('/record/info', async (ctx) => {
        ctx.headers = {
            contentType: '"text/json',
        };
        const search = querystring.parse(ctx.querystring);
        console.log(search);
        fs.appendFileSync('./error.json', JSON.stringify(search, null, 2));
        ctx.body = {
            success: true,
            msg: 'record success',
        };
    });
};
