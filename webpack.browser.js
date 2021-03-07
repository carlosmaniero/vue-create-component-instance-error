const {merge} = require('webpack-merge');
const baseWebpack = require('./webpack.base');
const path = require('path');

module.exports = merge(baseWebpack, {
    entry: './browser.js',
    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist', 'browser')
    },
});