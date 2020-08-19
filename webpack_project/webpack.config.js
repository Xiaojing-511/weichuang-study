const path = require('path');

// html文件打包
const HtmlPlugin = require('html-webpack-plugin');

// 重新打包
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// css分离
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { loader } = require('enhanced-resolve');

// 清除未使用的css
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

// jq
const webpack = require('webpack');

// 模块
module.exports = {
    // 开发环境配置  production:生产模式（线上）  development: 开发模式（开发）
    mode: 'development',
    // 配置入口文件的地址 （可以单一入口或多入口）
    entry: {
        index1: './src/index.js',

    },
    // 配置出口文件的地址（支持多出口配置）
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // 配置图片路径
        publicPath: 'http://localhost:8083/',
    },
    // 配置模块（解析CSS和图片转换压缩等）
    module: {
        rules: [
            /* 针对css处理规则 */
            {
                // 正则
                test: /\.css$/,
                // use:指需要什么样的loader去编译文件,这里由于源文件是.css所以选择css-loader
                // use中注意顺序不能变，从后往前去处理
                // use: ['style-loader', 'css-loader']
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        // 配置
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ],
            },
            /* 针对图片文件的处理规则 */
            {
                test: /\.(jpg|png|gif)/,
                use: [{
                    loader: 'url-loader',
                    // 配置
                    options: {
                        // 是把小于500B的文件打成Base64的格式，写入css
                        limit: 500,
                        // 匹配到的文件的打包路径
                        outputPath: 'images/',
                        // 移除 ES Modules 下的严格模式
                        esModule: false
                    }
                }]
            },
            /* 针对html中的图片打包  */
            {
                test: /\.(htm|html)$/i,  //i是将匹配到的内容转换成小写
                loader: 'html-withimg-loader'
            },
            // Sass的打包和分离
            {
                test: /\.scss/,
                // 打包到dist js文件中
                // use:[
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ],
                // 将sass文件分离出来，打包后在css文件中
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            // label  (es6=>es5)
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }],
                // 不把node_modules中的文件进行转换
                exclude: /node_modules/
            },






        ]


    },
    // 配置插件(生产模板和各项功能)  注意是数组
    plugins: [
        // html文件打包
        new HtmlPlugin({
            //是要打包的html模版路径和文件名称(不加的话 html内容不能到dist文件中)
            template: './src/index.html',
            // 是对html文件进行压缩，(如：去掉属性的双引号）
            minify: {
                // collapseWhitespace: true, //清除空格
                // removeAttributeQuotes: true, //清除多余引号
                // removeComments: true //删除注释
            },
            //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存JS
            hash: true
        }),
        
        // 重新打包 每次构建先删除dist再重新打包dist文件夹
        new CleanWebpackPlugin(),
        
        // css分离
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        
        // 清除未使用的css
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        
        // jq
        new webpack.ProvidePlugin({
            $:'jquery'
        }) 


    ],
    //配置开发服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        // IP地址
        host: 'localhost',
        // 服务器端口
        port: 8083,
        // 自动打开浏览器
        open: true,
    }
}