const path = require('path');//文件路径变量引入
var webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');//html压缩插件，引入
const extractTextPlugin = require('extract-text-webpack-plugin');//css分离插件
const CleanWebpackPlugin = require('clean-webpack-plugin');//打包前清理之前的旧包插件



function resolve (dir) {
    return path.join(__dirname, './', dir)
}

console.log(resolve ('abcdefghijklmnop'));

var website ={
    // publicPath:"https://dsp2.yzf.com.cn/"  //线上环境
    publicPath:"http://localhost:8080/" //本地调试环境
    // publicPath:"http://192.168.1.103:8888/"
}
// 这里的IP和端口，是你本机的ip或者是你devServer配置的IP和端口。


module.exports = {
    mode: 'development',
    // 入口文件配置项
    entry: {
        // babelPolyfill:'babel-polyfill',//添加了这个东西，才能完美的将ES6转码,否则Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，如：Set Map
        // 入口js文件的路径
        // main: './src/main.js'
        qby_dq_318: './src/qby_dq_318.js',
        index2: './src/index2.js'
    },
    // 出口文件配置项
    output: {
        // 打包路径
        path: path.resolve(__dirname, '../dist'),
        // 打包文件的名称
        filename: '[name].js',
        publicPath: website.publicPath  //publicPath：主要作用就是处理静态文件路径的。
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
         
        }
    },
    // 模块，解读css，图片转换规则，压缩规则等
    module: {
        rules: [
            {
                test:/\.js$/,
                exclude: /node_modules/,//有变化了处理，没有变化则不处理
                // include:[resolve('src'), resolve('test')],//需要处理的文件夹
                loader:"babel-loader"
            },
            // css-loader
            {
                test:/\.css$/,
                use: extractTextPlugin.extract({
                        fallback: "style-loader",
                        use: 'css-loader'
                })
             },
            //图片 loader
            {
                test:/\.(png|jpg|gif|jpeg)/,  //是匹配图片文件后缀名称
                use:[{
                    loader:'url-loader', //是指定使用的loader和loader的配置参数
                    options:{
                        limit: 50000,  //是把小于500B的文件打成Base64的格式，写入JS
                        name: "[name].[hash:4].[ext]",//打包后文件名
                        outputPath: "./images",//打包后图片文件输出路径
                        publicPath: website.publicPath + './images'
                    }
                }]
            },
            //视频文件loader
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'media/[name].[hash:7].[ext]'
                }
            },
            //字体库loader
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            { //页面中会用到img标签，img引用的图片地址也需要一个loader来处理,这样再打包后的html文件下img就可以正常引用图片路径了
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }
        ]
    },
    // 插件，用于生产模板和各项功能
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        }),
        // 打包前先清空
        new CleanWebpackPlugin(['../dist']) ,
        new extractTextPlugin({ //样式文件单独打包
            filename: "./css/[name].css",  //指定生成的文件名称
            disable: false,  //是否禁用此插件
            allChunks: true
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_dq_318.html', //是要打包的html模版路径和文件名称。
            filename: "qby_dq_318.html",
            title: "qby_dq_318",
            chunks:['qby_dq_318'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify:{ //是对html文件进行压缩
                removeAttributeQuotes:true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace:true //折叠空白区域 也就是压缩代码
            },
            hash:true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/index2.html', //是要打包的html模版路径和文件名称。
            filename: "index2.html",
            title: "页面一",
            chunks:['index2'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
    ],
    // 配置webpack开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, '../dist'),
        // 设置服务器的ip，也可以用localhost
        host: 'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置端口号
        port: '8080'
    }
}