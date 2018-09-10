const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

// 开发环境配置
const devConfig = {
    mode: 'development',
    // devtool: 'none',
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map', // 测试线上脚本报错
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = webpackMerge(baseConfig, devConfig);