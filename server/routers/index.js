const fs = require('fs');
const path = require('path');

const pathArr = [];

const getRouter = (basePath) => {
    const dir = path.join(__dirname, basePath);
    const list = fs.readdirSync(dir);
    list.forEach((item) => {
        const currentDir = path.join(dir, item);
        if (fs.statSync(currentDir).isDirectory()) {
            getRouter(path.join(basePath, item));
        } else { 
            pathArr.push(path.join(basePath, item));
        }
    });
};

getRouter('./');
module.exports = (router) => {
    // 筛选出当前模块，保证不会自己引用自己
    pathArr.filter((item) => {
        return !/^index\.js$/.test(item);
    }).forEach((item) => {
        console.log(item);
        /* eslint-disable */
        require('./'+item.replace(/\.(js|json)$/, ''))(router);
    });
};
