const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./webpack.config.js')
const path = require('path')

module.exports = Object.assign({}, baseConfig, {
  mode: "production",
  entry: {
    index: path.resolve(__dirname, 'site/example.tsx'),
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'xReact',
      template: 'site/index.html',
      favicon: 'site/favicon.ico'
    })
  ],
  optimization: {
    // 找到chunk中共享的模块,取出来生成单独的chunk
    splitChunks: {
      chunks: "all",  // async表示抽取异步模块，all表示对所有模块生效，initial表示对同步模块生效
      cacheGroups: {
        vendors: {  // 抽离第三方插件
          test: /[\\/]node_modules[\\/]/,     // 指定是node_modules下的第三方包
          name: "vendors",
          priority: -10                       // 抽取优先级
        },
      }
    },
  }
})