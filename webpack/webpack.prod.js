var path = require('path');
var webpack = require('webpack')
var merge = require('webpack-merge')
var commonConfig = require('./webpack.common')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var prodConfig = merge(commonConfig,{
    output: {
        path:path.resolve(__dirname, '../dist'),
        filename: path.posix.join('static', 'js/[name].js'),
        publicPath: './'
    },
    module:{
        rules:[
            {
                test:/\.scss/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader",
                }),

            },
        ]
    },
    devtool:'#source-map',
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        new ExtractTextPlugin(path.posix.join('static', 'css/style.css')),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: 'src/index.html',
            inject: true,
        }),
        /*抽离第三方库*/
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module, count) {
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),

    ]
})
module.exports = prodConfig;