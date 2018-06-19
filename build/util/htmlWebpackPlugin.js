const _ = require('lodash');
module.exports = class HtmlWebpackPlugin {
    constructor(options) {
        this.options = _.extend({
            
        },options);
    }

    apply(compiler) {
        compiler.plugin('emit', (compilation, callback) => {
            const { assets } = compilation;
            Object.keys(compilation.assets).filter((item) => {
                return /\.css$/.test(item);
            }).forEach((item) => {
                const source = assets[item]
                    .source()
                    .replace(/url\s*\([\s'"]*([^\s'"]+)[\s'"]*\)/g, `url($1${this.options.webpstr})`);
                    
                compilation.assets[item.replace(/\.css$/g, '.webp.css')] = {
                    source: () => {
                        return source;
                    },
                    size: () => {
                        return source.length;
                    },
                };
            });
            callback();
        });
    }
};