const baseConfig = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDom',
    }
  },
})
