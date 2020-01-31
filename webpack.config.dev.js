const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.js')
const path = require('path')

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
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
    host:'192.168.0.101'
  }
})