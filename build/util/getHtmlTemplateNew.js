const fs = require('fs');
const HtmlWebpackPlugin = require('./htmlWebpackPlugin');

const entries = [];// 入口获取
const getFilePath = (path) => {
    const files = fs.readdirSync(path);/* 读取目录下的所有文件名称，返回名称数组，如果文件名是目录，该目录下面的文件不会读取 */
    files.map((item, i) => {
        const tmpPath = `${path}/${item}`;
        const stats = fs.statSync(tmpPath);
        if (stats.isDirectory()) { // 如果是目录，则继续递归执行
            getFilePath(tmpPath);
        } else {
            /index\.html$/.test(tmpPath) && entries.push(tmpPath);// 只获取js
        }
    });
};

/**
 * 获取webpack 入口
 */
const getHtmlTemplate = (dir) => {
    getFilePath(dir);

    const plugins = entries.map((item, i) => {
        const itemName = item.replace(dir, '').slice(1);
        return new HtmlWebpackPlugin({
            template: item,
            filename: '../views/'+itemName,
            assetName: itemName.slice(0, -5),
            cache: true,
            inject: false
        });
    });

    return plugins;
};

module.exports = getHtmlTemplate;