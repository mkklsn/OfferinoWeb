const webpack = require('webpack'),
      merge = require('webpack-merge'),
      UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
      OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
      common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});