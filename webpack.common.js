const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: { main: './src/client/js/app.jsx' },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'wwwroot')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['wwwroot']),
    new HtmlWebpackPlugin({
      filename: 'main.html',
      template: 'src/client/main.html'
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ]
};
