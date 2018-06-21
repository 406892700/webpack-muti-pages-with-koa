const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const AfterEmitPlugin = require('./util/AfterEmitPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const getEntries = require('./util/getEntry');  // 获取入口
const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

// 生产环境配置
const proConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                // vendors: {
                //     test: /[\\/]node_modules[\\/]/,
                //     priority: -10
                // },
                vendors: {
                    test: (module, chunks) => {
                        return true;
                    },
                    name: 'commons',
                    filename: 'common/commons.[chunkhash].js',
                    minChunks: 4,
                    priority: 1,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new AfterEmitPlugin()
    ]
};

module.exports = webpackMerge(baseConfig, proConfig);