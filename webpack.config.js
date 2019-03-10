const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


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
            }
        ]
    }
}