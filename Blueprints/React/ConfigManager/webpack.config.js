const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/app.js'],
    output: {
        path: path.join(__dirname, './public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,  //RegEx => check for files ending in .js
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/, // ?=css or sccc, [optional 's']
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]   //multiple loaders
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        historyApiFallback: true //client-side pages, not server side
    }
};