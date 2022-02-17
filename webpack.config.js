const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname + '/dist/public'),
    filename: 'client.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /(node_modules)/, use: 'babel-loader' },
      {test: /\.(png|jpg)$/, exclude: /(node_modules)/, use: 'file-loader'},
      {test: /\.svg$/, use: 'svg-url-loader'}
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};