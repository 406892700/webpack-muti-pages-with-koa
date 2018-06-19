const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

// 生产环境配置
const proConfig = {
    mode: 'production',
    plugins: [
        
    ]
};

module.exports = webpackMerge(baseConfig, proConfig);