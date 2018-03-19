const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { main: './src/client/js/main.jsx' },
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src/client/js'),
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    port: 7771
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'src/client/main.html'
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ]
};
