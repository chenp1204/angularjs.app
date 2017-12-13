const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin');

//获取编译时设置的环境变量，去除变量字符串的前后空格，方便字符串比较
const BUILD_ENV = process.env.BUILD_ENV.replace(/(^\s*)|(\s*$)/g, "");
//判断当前执行命令设置的环境
const isDev = BUILD_ENV === "dev";
const isRelease = BUILD_ENV === "release";

//webpack配置对象
const config = {
    entry: {
        "vendor": ["angular", "angular-ui-router"],
        "index": __dirname + "/src/scripts/bootstraps/indexBootstrap.js"
    },
    output: {
        path: __dirname + "/build",
        publicPath: '/',
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js"
    }
};

//开发环境配置
if (isDev) {
    //开发环境配置
    config.devtool = "eval-source-map";
    config.devServer = {
        contentBase: "./build", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true,
        //colors: true,
        port: 7070
    };

    //loader配置
    config.module = {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }]
    };

    //插件配置
    config.plugins = [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons.chunk',
            chunks: ['index']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        }),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/views/index.html",
            chunks: ['commons.chunk', 'vendor', 'index'],
            chunksSortMode: 'dependency'
        }),
        // new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin("style.css"),
        // new CleanWebpackPlugin('build/*.*', {
        //     root: __dirname,
        //     verbose: true,
        //     dry: false
        // })
    ];
}

//发布环境配置
if (isRelease) {

}

//导出配置对象
module.exports = config;