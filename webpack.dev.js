const merge = require('webpack-merge'),
      common = require('./webpack.common.js'),
      webpack = require('webpack');

module.exports = merge(common, 
{
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'wwwroot',
        port: 7772
    },
    plugins: [
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
      })
  ]
});