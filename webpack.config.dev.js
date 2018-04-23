/**
 * Created by srivaspa on 22/04/18.
 */

import webpack from 'webpack';
import path from 'path';
export default {
    debug: true, //logs debug info
    devtool: 'inline-source-map',
    noInfo: false, //list the files that are bundling if true
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
        path.resolve(__dirname, 'src/index') //entry point is last
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.Else the there is no physical bundle that you would see in your structure
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //for hot reloading
        new webpack.NoErrorsPlugin() //so that any error during bundling doesnt break app instead show message in console
    ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)(\?.*$|$)/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
};