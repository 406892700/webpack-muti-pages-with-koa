const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';

const entries = [];// 入口获取
const getFilePath = (path) => {
    const files = fs.readdirSync(path);/* 读取目录下的所有文件名称，返回名称数组，如果文件名是目录，该目录下面的文件不会读取 */
    files.map((item, i) => {
        const tmpPath = `${path}/${item}`;
        const stats = fs.statSync(tmpPath);
        if (stats.isDirectory()) { // 如果是目录，则继续递归执行
            getFilePath(tmpPath);
        } else {
            /index\.tpl$/.test(tmpPath) && entries.push(tmpPath);// 只获取js
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
            // template: item,
            template: './client/skins/index.html',
            filename: '../views/'+itemName.replace(/\.tpl$/g,'.html'),
            assetName: itemName.slice(0, -4),
            cache: true,
            inject: false,
            // minify: { // 坑爹的无法处理带模板标记的html
            //     caseSensitive: true,
            //     collapseWhitespace: true,
            //     customAttrSurround: [[/<\$=?\s+/, /\s*\$>/]]
            // },
        });
    });

    return plugins;
};

module.exports = getHtmlTemplate;