const fs = require('fs');
const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

const entries = [];// 入口获取
const getFilePath = (path) => {
    const files = fs.readdirSync(path);/* 读取目录下的所有文件名称，返回名称数组，如果文件名是目录，该目录下面的文件不会读取 */
    files.map((item, i) => {
        const tmpPath = `${path}/${item}`;
        const stats = fs.statSync(tmpPath);
        if (stats.isDirectory()) { // 如果是目录，则继续递归执行
            getFilePath(tmpPath);
        } else {
            /index\.js$/.test(tmpPath) && entries.push(tmpPath);// 只获取js
        }
    });
};

// './client/skins'

/**
 * 获取webpack 入口
 * @param  {[type]} type [类别 production=> 生产环境]
 * @return {[type]}      [description]
 */
const getEntries = (path, type) => {
    getFilePath(path);
    const entry = {};
    const hotMiddlewareScript = './build/dev-client';
    entries.map((item, i) => {
        const name = item.slice(0, -3).replace(path, '').slice(1);
        !isProd ? entry[name] = ([item.slice(0, -3), hotMiddlewareScript]) : (entry[name] = item.slice(0, -3));
    });

    return entry;
};

module.exports = getEntries;