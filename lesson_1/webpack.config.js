const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
    entry: {
        app: `${APP_DIR}/index.js`,//specifies the entry file for webpack
    },
    plugins: [
        new BundleAnalyzerPlugin()
    ],
    output: {
        path: BUILD_DIR,
        filename: '[name].js',
        publicPath: '/dist',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.png', '.jpg'],
        modules: [
            'node_modules', 'src',
        ]
    },
};

module.exports = config;
