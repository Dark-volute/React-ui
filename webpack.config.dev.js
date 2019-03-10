const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.js')

module.exports = Object.assign({},baseConfig, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Moon',
            template: 'index.html'
        })
    ]
})