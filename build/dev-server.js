const { exec } = require('child_process');
debugger;
const argv = process.argv;

let cmdStr;
if(/(\-){1,2}dev$/.test(argv[2])) {
    cmdStr = 'cross-env NODE_ENV=development supervisor -w build,server index.js';
} else {
    cmdStr = 'cross-env NODE_ENV=production node_modules/.bin/webpack --config ./build/webpack.production.config.js';
}


exec(cmdStr, (err) => {
    if(err) {
        console.log(err);
        console.error('启动失败');
    } else {
        console.log('项目启动成功');
    }
});