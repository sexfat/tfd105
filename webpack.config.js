const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {index :'./script.js'},               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },              // 出口文件
      module: {
        rules: [{
            // 格式
            test: /\.css$/,
            //順序是由下到上 css > style
            use: [
                'style-loader',
                'css-loader'
            ],
        }]

    },              // 處裡對應模組
    plugins: [
        new HtmlWebpackPlugin({
            chunks : ['index'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index.html',
            //來源
            filename : 'index.html'
            // 目的地
        })

    ],            // 對應的插件
    // devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置
}