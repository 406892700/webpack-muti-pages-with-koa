/**
 * dll打包稳定的框架、库脚本，因为比较大的框架脚本文件都通过script方式单独引入，因此用处并不大
 */
const webpack = require('webpack');
const path = require('path');

 module.exports = {
     mode: 'production',
     resolve: {
        extensions: ['.js', '.jsx']
     },
     entry: {
         srcjs: ['./client/src/testDll1.1', './client/src/testDll1.2', './client/src/testDll1']
     },
     output: {
         path: path.join(__dirname, "./dll"),
         filename: 'myDll.[name].js',
         library: '[name]_[hash]'
     },
     plugins: [
         new webpack.DllPlugin({
             path: path.join(__dirname, './dll', '[name]-manifest.json'),
             name: '[name]_[hash]'
         })
     ]
 };
