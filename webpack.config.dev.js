const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.js')
const path = require('path')

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map', //开发环境下使用
  entry: {
    index: path.resolve(__dirname, 'site/example.tsx'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xReact',
      template: 'site/index.html',
      favicon: 'site/favicon.svg'
    })
  ],
  devServer: {
    host:'localhost'
  }
})