/*
 * 打包完成后进行项目启动
 * @Author: Simple 
 * @Date: 2017-12-04 09:53:19 
 * @Last Modified by: Simple
 * @Last Modified time: 2018-06-21 19:04:48
 */

const { exec } = require('child_process');
const cpuNums = require('os').cpus().length;


module.exports = class AfterEmitPlugin {
    apply(compiler) {
        compiler.plugin('after-emit', (compilation, callback) => {
            console.log('\n构建成功\n');
            exec(`cross-env NODE_ENV=production pm2 start index.js -i ${cpuNums} -f`, (err) => {
                if (err) {
                    console.log(err);
                    console.log('项目启动失败!');
                } else {
                    console.log('项目启动成功!\n使用pm2 list 或者 pm2 monit查看项目运行情况');
                }
            });

            callback();
        });
    }
};