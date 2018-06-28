const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
// const HtmlWebpackPlugin = require('html-webpack-plugin');

const getEntries = require('./util/getEntry');  // 获取入口
const getHtmlTemplate = require('./util/getHtmlTemplate'); // 获取页面列表

const isProd = process.env.NODE_ENV === 'production'; // 是否是生产环境

// 基础路径
const basePath = './';

module.exports = {
  entry: getEntries('./client/skins'),
  output: {
    filename: isProd ? '[name].[chunkhash].js' : '[name].[hash].js',
    path: path.resolve(basePath, 'dist/client/skins/'),
    publicPath: '/',
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss|css$/,
        // exclude: /^node_modules$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader?sourceMap',
          'css-loader?sourceMap',
          'resolve-url-loader?sourceMap',
          'sass-loader?sourceMap',
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        // exclude: /^node_modules$/,
        use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]',
      },
      {
        test: /\.tpl$/,
        use: [
          {
            loader: 'html-withimg-loader',
          }
        ]
      },
      {
          test: /\.jsx$/,
          // exclude: /^node_modules$/,
          use: 'babel-loader',
      },
      {
          test: /\.vue$/,
          // exclude: /^node_modules$/,
          use: 'vue-loader',
      },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.vue'],
    alias: {
      // vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(basePath, './client/src')
    }
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //     $: 'jquery'
    // }),
    new VueLoaderPlugin(),
    new cleanWebpackPlugin(
      'dist',
      {
        root: path.resolve(basePath),
        // exclude: ['index.html'],
        verbose: false
      }
    ),
    new MiniCssExtractPlugin({
      filename: !isProd ? '[name].[hash].css' : '[name].[chunkhash].css',
      chunkFilename: !isProd ? '[id].[hash].css' : '[id].[chunkhash].css',
    }),
    ...getHtmlTemplate('./client/skins')
  ]
};
