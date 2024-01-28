const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {

    mode: 'development',
    entry: {
        index: path.join('./src/pages/index/index.js'),
        details: path.join('./src/pages/details/details.js'),
        classification: path.join('./src/pages/classification/classification.js'),
        course: path.join('./src/pages/course/course.js'),
        endcourse: path.join('./src/pages/endcourse/endcourse.js'),
        exitcourse: path.join('./src/pages/exitcourse/exitcourse.js'),
        mine: path.join('./src/pages/mine/mine.js'),
        minenotes:path.join('./src/pages/minenotes/minenotes.js'),
        settings:path.join('./src/pages/settings/settings.js'),
        message: path.join('./src/pages/message/message.js'),
        chatting: path.join('./src/pages/chatting/chatting.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        preferRelative: true,
        alias: {
            fonts: path.resolve('src/assets/fonts'),
            icons: path.resolve('src/assests/icons'),
            images: path.resolve('src/assests/images'),
            styles: path.resolve('src/assets/styles'),
            components: path.resolve('src/assets/components'),
        }
    },
    module: {
        rules: [
            {
                test: /\.art$/,
                loader: 'art-template-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]',
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/pages/index/index.art',
                filename: 'index.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/details/details.art',
                filename: 'details.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/classification/classification.art',
                filename: 'classification.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/course/course.art',
                filename: 'course.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/endcourse/endcourse.art',
                filename: 'endcourse.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/exitcourse/exitcourse.art',
                filename: 'exitcourse.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/mine/mine.art',
                filename: 'mine.html'
            }
            
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/minenotes/minenotes.art',
                filename: 'minenotes.html'
            }
            
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/settings/settings.art',
                filename: 'settings.html'
            }
            
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/message/message.art',
                filename: 'message.html'
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: './src/pages/chatting/chatting.art',
                filename: 'chatting.html'
            }
        ),
    ]
}