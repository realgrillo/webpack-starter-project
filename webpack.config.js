const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                //loader: 'style-loader!css-loader!sass-loader' Escreve direto no body
                loader: ExtractTextPlugin.extract({ // Gera o arquivo bundle.css
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader!sass-loader?includePaths[]=' + path.resolve(__dirname, './node_modules/compass-mixins/lib')
                })
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    resolve: {
        alias: {
            jquery: 'jquery/src/jquery',
            modules: __dirname + '/node_modules/'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new ExtractTextPlugin('bundle.css')
    ]
}