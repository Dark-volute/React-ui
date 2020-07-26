const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx'],
    alias: {
      stylesheets: path.resolve(__dirname, 'stylesheets'),
      examples: path.resolve(__dirname, 'examples'),
      lib: path.resolve(__dirname, 'lib'),
    },
    modules: [path.resolve(__dirname, 'lib'), 'node_modules']
  },

  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'React UI',
    libraryTarget: 'umd'
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg?$/,
        loader: 'svg-sprite-loader'
      },
      {
        test: /\.scss$/,
        loader: [
          'style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'lib', 'style')]
            }
          }]
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}