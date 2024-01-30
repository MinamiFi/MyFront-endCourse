const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin')

module.exports={
    mode:'development',
    entry:'./src/index.js',//待处理的文件
    output:{
        path:path.resolve(__dirname,'dist'),//打包的路径
        filename:'index.js'//打包生成文件的名字
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html',
                filename:'index.html'
            }
        )
    ]
}