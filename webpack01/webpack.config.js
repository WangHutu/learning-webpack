// 这个文件是用来 说明webpack的打包规则、
// 模块化的写法

// 模块化写法

// 代码压缩插件
// var UglifyJSPlugin = require( ' uglifyjs-webpack-plugin ' );
var webpack = require('webpack');
module.exports = {
    entry:{
        // 打包多个文件
        index : './src/js/entry.js',
        index2 : './src/js/entry2.js'
    },
    output:{
        // [name].js 的意思是，根据引入的对象的属性名，来规定打包出来的文件的名字
        // 例如，entry打包出来的名字是index；entry2打包出来的名字是index2；
        filename: '[name].js',
        path: __dirname + '/out',

        // 静态资源比如图片的打包的指定路径
        publicPath:'./out'
    },
    module: {
        rules: [
            // 如果打包的时候没有相应的加载器而报错，那么就需要用npm install 下载

            // 遇到 .js的文件用 babel-loader 加载器来解析
            { test:/.js$/, use: ['babel-loader'] },

            // 遇到 .css的文件用 style-loader 和 css-loader 加载器来解析，解析顺序先右后左
            { test:/.css$/, use:['style-loader','css-loader'] },

            // 遇到 图片的文件用 url-loader 加载器来解析, 后面可以限制图片的大小，大于8192的时候独立打包出来
            { test:/.jpg|png|gif|svg/, use:['url-loader?limit=8192&name=/[name].[ext]'] }
        ]
    },
    // 插件
    plugin:[
        // // new UglifyJSPlugin(),
        new webpack.optimize.Common({
            name : 'commons',
            fliename : 'commons.js',
            minChunks : 3
        })
    ]

};