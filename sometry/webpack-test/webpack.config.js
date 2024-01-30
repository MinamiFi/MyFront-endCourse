const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: {
            test: /\.css$/,
            //loader:'css-loader'
            use: ['style-loader', 'css-loader']
        },
        //单入口
        plugins: [new HtmlWebpackPlugin(
            { template: './index.html' },

            //多入口
        )]
    }
};