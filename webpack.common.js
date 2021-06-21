const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv-webpack');





module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: "bundle.[fullhash].js",
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'assets/[name][hash][ext][query]'
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    }),
        new CleanWebpackPlugin(),
        new dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/i,
                type: "asset/resource"
            }
        ]
    }
}