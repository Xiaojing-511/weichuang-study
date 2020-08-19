const path = require('path');
// 打包html文件
const HtmlPlugin = require("html-webpack-plugin");
// 重新打包
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// css分离
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 清除未使用的css
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");
// 不将jq打包到dist js中
const webpack = require("webpack");


module.exports = {
    // 开发环境配置  production:生产模式（线上）  development: 开发模式（开发）
    mode: 'development',
    // 入口文件配置
    //相对路径 
    entry: {
        index: './src/index.js',  //index 和main 就是下面的name
        main: './src/main.js'
    },
    // 出口文件
    output: {
        // 绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        // 配置图片路径
        publicPath: 'http://localhost:8083/',
    },
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8083,
        open: true,
    },
    // 插件
    plugins: [
        // 打包html文件
        new HtmlPlugin({
            template: './src/index.html',
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
        }),
        // 每次构建重先删除dist再重新打包dist文件夹
        new CleanWebpackPlugin(),
        // css分离
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // 清除未使用的css
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname,'src/*.html')),
        }),
        //jq 
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    module: {   //模块 ：例如解读css，图片如何转换，压缩
        rules: [
            /* 针对css处理规则 */
            {
                // css内容被打包到dist下面的index.js文件中  （要在src js中引入）
                test: /\.css$/,
                // use中注意顺序不能变，从后往前去处理
                // use: ['style-loader', 'css-loader']
                // css分离
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'css-loader'，

                    // 处理css3语法前缀
                    {
                        loader: 'css-loader',
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
                    options: {
                        limit: 500,
                        // 相对路径 不能找到 要在output中配置
                        outputPath: 'images/',
                        esModule: false

                    }
                }]
            },
            // 针对html中的图片打包
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            // Sass打包  打包到dist js文件中 (要在src js中引入) 
            {
                test: /\.scss$/,
                // use: [
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader',
                // ],

                // 将sass文件分离出来，打包后在css文件中
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            /* 针对js文件的处理（es6 => es5） */
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
            }
        ]
    }
}




