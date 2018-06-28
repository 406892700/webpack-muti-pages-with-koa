const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const AfterEmitPlugin = require('./util/AfterEmitPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getEntries = require('./util/getEntry');  // 获取入口
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

// 生产环境配置
const proConfig = {
    entry: {
        ...getEntries('./client/skins'),
    },
    mode: 'production',
    // optimization: { //不咋适合多页的webpack应用，不如commonChunksPlugins
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 5*1024*1024,
    //         cacheGroups: {
    //             common: {
    //                 name: 'commons',
    //                 filename: 'common/commons.[chunkhash].js',
    //                 minChunks: 3,
    //                 priority: 1,
    //                 reuseExistingChunk: true
    //             }
    //         }
    //     }
    // },   
    plugins: [
        new AfterEmitPlugin(),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./dll/srcjs-manifest.json'),
            name: './my-dll.js',
            scope: 'xyz',
            sourceType: 'commonjs2'
          })
    ]
};

module.exports = webpackMerge(baseConfig, proConfig);