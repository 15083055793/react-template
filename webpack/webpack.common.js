
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

const commonConfig = {
    context: path.resolve(__dirname, '../'),
    // entry: {
    //     'app':'./src/main.jsx',
    // },
    entry: ['./src/main.jsx', 'react-hot-loader/patch',],
    output: {
        path:path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        chunkFilename: 'chunks/[name].[hash:4].js',
        publicPath: process.env.NODE_ENV === 'production'
            ? '/'
            : '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    module:{
        rules: [
            {
                test:/\.js?x/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'img/[name].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'media/[name].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('static', 'fonts/[name].[ext]')
                }
            }

        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
}

module.exports = commonConfig;
