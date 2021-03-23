const webpack = require('webpack'),
      htmlWebpackPlugin = require('html-webpack-plugin'),
      extractTextPlugin = require('extract-text-webpack-plugin'),
      cssModules = 'modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]';
module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']//extensiones que va a vigilar
    },
    entry: ['./src/index.jsx'],
    output: {
        filename: 'app.js',
        path: './build',
        publicPath:'/'
    },
    module: {
        rules: [
            { test: /(\.js|jsx)$/, exclude: /node_modules/, loader: ['babel-loader']},
            { test: /\.css$/, loader: `style-loader!css-loader?${cssModules}`  }
        ]
    },
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        inline: true
    },
    plugins: [
        new htmlWebpackPlugin({template: './src/assets/index.html'}),
        new extractTextPlugin('style.css', { allChunks: true })
    ]
}