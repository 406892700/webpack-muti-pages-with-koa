const pool = require('../../libs/createConnection');

module.exports = (router) => {
  // 登录接口
  router.post('/api/login', async (ctx) => {
    const {
      username,
      password,
    } = ctx.request.body;

    const result = await pool.query(`SELECT * from t_userinfo AS user WHERE user.username = '${username}' AND user.password = '${password}'`)
    if (result.length) {
      delete result[0].password;
      ctx.body = {
        code: 200,
        result: {
          msg: '登录成功',
          userinfo: result[0],
        },
      };
    } else {
      ctx.body = {
        code: 401,
        result: {
          msg: '账号或者密码错误',
          userinfo: null,
        },
      };
    }
  });

  // 获取歌曲列表接口
  router.get('/api/getSongs', async (ctx) => {
    const { type } = ctx.request.query;
    let sql = 'SELECT * FROM t_songinfo as song';
    if (typeof type !== 'undefined') {
      sql += ` WHERE song.type = '${type}'`;
    }
    const result = await pool.query(sql);

    ctx.body = {
      code: 200,
      result: {
        list: result,
      },
    };
  });
};
