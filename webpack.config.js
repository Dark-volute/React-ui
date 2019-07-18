const path = require('path')

module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.jsx']
  },

  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'Moon',
    libraryTarget: 'umd'
  },
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
        loader: ['style-loader', 'css-loader', 'sass-loader']
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