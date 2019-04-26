const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.js')
const path = require('path')

module.exports = Object.assign({},baseConfig, {
    mode: 'development',
    entry: {
        index: './example.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Moon',
            template: 'index.html'
        })
    ]
})