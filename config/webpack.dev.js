const path = require('path');//文件路径变量引入
var webpack = require('webpack');
const htmlPlugin = require('html-webpack-plugin');//html压缩插件，引入
const extractTextPlugin = require('extract-text-webpack-plugin');//css分离插件
const CleanWebpackPlugin = require('clean-webpack-plugin');//打包前清理之前的旧包插件



function resolve (dir) {
    return path.join(__dirname, './', dir)
}

// console.log(resolve ('abcdefghijklmnop'));

var website ={
    // publicPath:"https://dsp2.yzf.com.cn/"  //线上环境
    publicPath:"http://localhost:8081/" //本地调试环境
}
// 这里的IP和端口，是你本机的ip或者是你devServer配置的IP和端口。


module.exports = {
    mode: 'development',
    // 入口文件配置项
    entry: {
        babelPolyfill:'babel-polyfill',//添加了这个东西，才能完美的将ES6转码,否则Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，如：Set Map
        // 入口js文件的路径
        qby_dq_318: './src/qby_dq_318.js',
        mz_bs: './src/mz_bs.js',
        mz_bs_pc: './src/mz_bs_pc.js',
        qby_dq_318_new: './src/qby_dq_318_new.js',
        qby_wkb1_bj: './src/qby_wkb1_bj.js',
        qby_wkb1_bj_pc: './src/qby_wkb1_bj_pc.js',
        mz_pp: './src/mz_pp.js',
        mz_pp_pc: './src/mz_pp_pc.js',
        kjby_jb1: './src/kjby_jb1.js',
        kjby_jb1_pc: './src/kjby_jb1_pc.js',
        kjby_jb2: './src/kjby_jb2.js',
        kjby_jb2_pc: './src/kjby_jb2_pc.js',
        qby_wkb1_bjd: './src/qby_wkb1_bjd.js',
        qby_wkb1_bjd_pc: './src/qby_wkb1_bjd_pc.js', 
        qby_wkb1_bjb: './src/qby_wkb1_bjb.js',
        qby_wkb1_bjb_pc: './src/qby_wkb1_bjb_pc.js',
        qby_wkb1_bjbd: './src/qby_wkb1_bjbd.js',
        qby_wkb1_bjbd_pc: './src/qby_wkb1_bjbd_pc.js',
        qby_wkb1_bjc: './src/qby_wkb1_bjc.js',
        qby_wkb1_bjc_pc: './src/qby_wkb1_bjc_pc.js',
        qby_wkb1_bjcd: './src/qby_wkb1_bjcd.js',
        qby_wkb1_bjcd_pc: './src/qby_wkb1_bjcd_pc.js',
        fghcd_wkb2: './src/fghcd_wkb2.js',
        fghcd_wkb2_pc: './src/fghcd_wkb2_pc.js',
        mzxq_wkb3: './src/mzxq_wkb3.js',
        mzxq_wkb3_pc: './src/mzxq_wkb3_pc.js',
        fghcdb_wkb2: './src/fghcdb_wkb2.js',
        fghcdb_wkb2_pc: './src/fghcdb_wkb2_pc.js',
        fgh_lrf_zfs2: './src/fgh_lrf_zfs2.js',
        fgh_lrf_zfs2_pc: './src/fgh_lrf_zfs2_pc.js',
        hc_hb_wkb4: './src/hc_hb_wkb4.js',
        hc_hb_wkb4_pc: './src/hc_hb_wkb4_pc.js',
        // qgkjby0515: './src/qgkjby0515.js',//废弃的
        nh_hbbj_wkb5: './src/nh_hbbj_wkb5.js',
        nh_hbbj_wkb5_pc: './src/nh_hbbj_wkb5_pc.js',
        fgh_bssj_zfs3: './src/fgh_bssj_zfs3.js',
        fgh_bssj_zfs3_pc: './src/fgh_bssj_zfs3_pc.js',
        fgh_hxzx_zfs4: './src/fgh_hxzx_zfs4.js',
        fgh_hxzx_zfs4_pc: './src/fgh_hxzx_zfs4_pc.js',
        fgh_cpbj_za1: './src/fgh_cpbj_za1.js',
        fgh_cpbj_za1_pc: './src/fgh_cpbj_za1_pc.js',
        fgh_cpbj_za1_hwb: './src/fgh_cpbj_za1_hwb.js',
        fgh_cpbj_za1_hwb_pc: './src/fgh_cpbj_za1_hwb_pc.js',
        fgh_zxbj_zfs5: './src/fgh_zxbj_zfs5.js',
        fgh_zxbj_zfs5_pc: './src/fgh_zxbj_zfs5_pc.js',
        hc_dssj_wkb6: './src/hc_dssj_wkb6.js'
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
                        name: "[name].[ext]",//打包后文件名
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
                  name: 'video/[name].[ext]'
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
            template:'./src/mz_bs.html', //是要打包的html模版路径和文件名称。
            filename: "mz_bs.html",
            title: "迷住软装，别墅私人订制一体化服务",
            chunks:['mz_bs'], //添加引入的js,也就是entry中的key
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
            template:'./src/mz_bs_pc.html', //是要打包的html模版路径和文件名称。
            filename: "mz_bs_pc.html",
            title: "迷住软装，别墅私人订制一体化服务",
            chunks:['mz_bs_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_dq_318_new.html', //是要打包的html模版路径和文件名称。
            filename: "qby_dq_318_new.html",
            title: "全包圆-全包装修省！送！免！",
            chunks:['qby_dq_318_new'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bj.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bj.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bj'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bj_pc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bj_pc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bj_pc'], //添加引入的js,也就是entry中的key
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
            template:'./src/mz_pp.html', //是要打包的html模版路径和文件名称。
            filename: "mz_pp.html",
            title: "迷住软装，别墅私人订制一体化服务",
            chunks:['mz_pp'], //添加引入的js,也就是entry中的key
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
            template:'./src/mz_pp_pc.html', //是要打包的html模版路径和文件名称。
            filename: "mz_pp_pc.html",
            title: "迷住软装，别墅私人订制一体化服务",
            chunks:['mz_pp_pc'], //添加引入的js,也就是entry中的key
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
            template:'./src/kjby_jb1.html', //是要打包的html模版路径和文件名称。
            filename: "kjby_jb1.html",
            title: "CCTV-2《空间榜样》限时免费设计",
            chunks:['kjby_jb1'], //添加引入的js,也就是entry中的key
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
            template:'./src/kjby_jb1_pc.html', //是要打包的html模版路径和文件名称。
            filename: "kjby_jb1_pc.html",
            title: "CCTV-2《空间榜样》限时免费设计",
            chunks:['kjby_jb1_pc'], //添加引入的js,也就是entry中的key
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
            template:'./src/kjby_jb2.html', //是要打包的html模版路径和文件名称。
            filename: "kjby_jb2.html",
            title: "CCTV-2《空间榜样》限时免费设计",
            chunks:['kjby_jb2'], //添加引入的js,也就是entry中的key
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
            template:'./src/kjby_jb2_pc.html', //是要打包的html模版路径和文件名称。
            filename: "kjby_jb2_pc.html",
            title: "CCTV-2《空间榜样》限时免费设计",
            chunks:['kjby_jb2_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjd.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjd.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjd'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjd_pc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjd_pc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjd_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjb.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjb.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjb'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjb_pc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjb_pc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjb_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjbd.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjbd.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjbd'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjbd_pc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjbd_pc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjbd_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjc_pc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjc_pc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjc_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjcd.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjcd.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjcd'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/qby_wkb1_bjcd_pc.html', //是要打包的html模版路径和文件名称。
            filename: "qby_wkb1_bjcd_pc.html",
            title: "一站式装修服务价格计算",
            chunks:['qby_wkb1_bjcd_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fghcd_wkb2.html', //是要打包的html模版路径和文件名称。
            filename: "fghcd_wkb2.html",
            title: "成都5.18峰格汇盛装开业",
            chunks:['fghcd_wkb2'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fghcd_wkb2_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fghcd_wkb2_pc.html",
            title: "成都5.18峰格汇盛装开业",
            chunks:['fghcd_wkb2_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/mzxq_wkb3.html', //是要打包的html模版路径和文件名称。
            filename: "mzxq_wkb3.html",
            title: "迷住高端一体化软装服务",
            chunks:['mzxq_wkb3'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/mzxq_wkb3_pc.html', //是要打包的html模版路径和文件名称。
            filename: "mzxq_wkb3_pc.html",
            title: "迷住高端一体化软装服务",
            chunks:['mzxq_wkb3_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fghcdb_wkb2.html', //是要打包的html模版路径和文件名称。
            filename: "fghcdb_wkb2.html",
            title: "成都5.18峰格汇盛装开业",
            chunks:['fghcdb_wkb2'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fghcdb_wkb2_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fghcdb_wkb2_pc.html",
            title: "成都5.18峰格汇盛装开业",
            chunks:['fghcdb_wkb2_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_lrf_zfs2.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_lrf_zfs2.html",
            title: "0元定制-母亲节装修设计方案",
            chunks:['fgh_lrf_zfs2'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_lrf_zfs2_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_lrf_zfs2_pc.html",
            title: "0元定制-母亲节装修设计方案",
            chunks:['fgh_lrf_zfs2_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/hc_hb_wkb4.html', //是要打包的html模版路径和文件名称。
            filename: "hc_hb_wkb4.html",
            title: "汇巢别墅：更环保的别墅装饰",
            chunks:['hc_hb_wkb4'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/hc_hb_wkb4_pc.html', //是要打包的html模版路径和文件名称。
            filename: "hc_hb_wkb4_pc.html",
            title: "汇巢别墅：更环保的别墅装饰",
            chunks:['hc_hb_wkb4_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        //废弃的
        // new htmlPlugin({
        //     minify: { //是对html文件进行压缩
        //         removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
        //         collapseWhitespace: true //折叠空白区域 也就是压缩代码
        //     },
        //     hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
        //     template:'./src/qgkjby0515.html', //是要打包的html模版路径和文件名称。
        //     filename: "qgkjby0515.html",
        //     title: "业之峰装饰 全国征集榜样设计",
        //     chunks:['qgkjby0515'], //添加引入的js,也就是entry中的key
        //     favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
        //     inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
        //     showErrors:true,//是否将错误信息输出到html页面中
        // }),
        //结束
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/nh_hbbj_wkb5.html', //是要打包的html模版路径和文件名称。
            filename: "nh_hbbj_wkb5.html",
            title: "一站式环保装修报价",
            chunks:['nh_hbbj_wkb5'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/nh_hbbj_wkb5_pc.html', //是要打包的html模版路径和文件名称。
            filename: "nh_hbbj_wkb5_pc.html",
            title: "一站式环保装修报价",
            chunks:['nh_hbbj_wkb5_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_bssj_zfs3.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_bssj_zfs3.html",
            title: "业之峰高端别墅大宅私人定制设计-专业引领新潮流",
            chunks:['fgh_bssj_zfs3'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_bssj_zfs3_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_bssj_zfs3_pc.html",
            title: "业之峰高端别墅大宅私人定制设计-专业引领新潮流",
            chunks:['fgh_bssj_zfs3_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_hxzx_zfs4.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_hxzx_zfs4.html",
            title: "业之峰-0元定制户型装修规划",
            chunks:['fgh_hxzx_zfs4'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_hxzx_zfs4_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_hxzx_zfs4_pc.html",
            title: "业之峰-0元定制户型装修规划",
            chunks:['fgh_hxzx_zfs4_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_cpbj_za1.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_cpbj_za1.html",
            title: "峰格汇一站式完整家装，省钱省心，比自己装修还便宜",
            chunks:['fgh_cpbj_za1'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_cpbj_za1_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_cpbj_za1_pc.html",
            title: "峰格汇一站式完整家装，省钱省心，比自己装修还便宜",
            chunks:['fgh_cpbj_za1_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_cpbj_za1_hwb.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_cpbj_za1_hwb.html",
            title: "峰格汇一站式完整家装，省钱省心，比自己装修还便宜",
            chunks:['fgh_cpbj_za1_hwb'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_cpbj_za1_hwb_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_cpbj_za1_hwb_pc.html",
            title: "峰格汇一站式完整家装，省钱省心，比自己装修还便宜",
            chunks:['fgh_cpbj_za1_hwb_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_zxbj_zfs5.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_zxbj_zfs5.html",
            title: "免费算一算-装修要花多少钱",
            chunks:['fgh_zxbj_zfs5'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/fgh_zxbj_zfs5_pc.html', //是要打包的html模版路径和文件名称。
            filename: "fgh_zxbj_zfs5_pc.html",
            title: "免费算一算-装修要花多少钱",
            chunks:['fgh_zxbj_zfs5_pc'], //添加引入的js,也就是entry中的key
            favicon: './favicon.ico',//添加特定的 favicon 路径到输出的 HTML 文件中。
            inject:true,//1、true或者body：所有JavaScript资源插入到body元素的底部2、head: 所有JavaScript资源插入到head元素中3、false： 所有静态资源css和JavaScript都不会注入到模板文件中
            showErrors:true,//是否将错误信息输出到html页面中
        }),
        new htmlPlugin({
            minify: { //是对html文件进行压缩
                removeAttributeQuotes: true,  //removeAttrubuteQuotes是却掉属性的双引号。
                collapseWhitespace: true //折叠空白区域 也就是压缩代码
            },
            hash: true, //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS。
            template:'./src/hc_dssj_wkb6.html', //是要打包的html模版路径和文件名称。
            filename: "hc_dssj_wkb6.html",
            title: "",
            chunks:['hc_dssj_wkb6'], //添加引入的js,也就是entry中的key
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
        port: '8081'
    }
}