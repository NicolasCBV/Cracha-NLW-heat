const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'client.js'
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        exclude: /(node_modules)/, 
        use: 'babel-loader' 
      },

      {
        test: /\.(png|jpg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          }
        }]
      },

      {
        test: /\.html$/,
        use: [
          'html-loader'
        ]
      },

      {
        test: /\.js$/, 
        use: 'source-map-loader'
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
};