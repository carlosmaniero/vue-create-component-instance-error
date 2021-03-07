const {merge} = require('webpack-merge');
const baseWebpack = require('./webpack.base');
const webpackNodeExternals = require("webpack-node-externals");
const path = require('path');

module.exports = merge(baseWebpack, {
    entry: './server.js',
    target: "node",
    output: {
        libraryTarget: "commonjs2",
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist', 'server')
    },
    externals: [webpackNodeExternals()]
});