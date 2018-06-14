
// import webpack from 'webpack';
const path = require('path');
var webpack = require('webpack')
var merge = require('webpack-merge')
var commonConfig = require('./webpack.common')
const CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const packageConfig = require('../package.json')

const devWebpackConfig = merge(commonConfig,{

    devtool: '#cheap-module-eval-source-map',
    module:{
        rules: [
            {
                test:/\.scss/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.css/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join('/', 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: 'localhost',
        port: 8090,
        open: true,
        overlay: true
            ? { warnings: false, errors: true }
            : false,
        publicPath: '/',
        proxy: {},
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll:false,
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),//编译报错不终止编译
        new HtmlWebpackPlugin({
            filename:"index.html",
            template: 'index.html',
            inject: true
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ])
    ]
})


// module.exports = devConfig;

const createNotifierCallback = () => {
    const notifier = require('node-notifier')

    return (severity, errors) => {
        if (severity !== 'error') return

        const error = errors[0]
        const filename = error.file && error.file.split('!').pop()

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || ''
        })
    }
}

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = '8090'
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
            // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: localhost:8090`],
                },
                onErrors: true
                    ? createNotifierCallback()
                    : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})
