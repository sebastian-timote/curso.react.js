const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/assets/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ],
    devServer: {
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[path][local]--[hash:base64:5]"
                            }
                        }
                    }
                ]
            },
            {
                test:/(\.js|jsx)$/,
                exclude:/(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }

                }
            }
        ]
    }
}