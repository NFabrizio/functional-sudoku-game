const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8000,
    publicPath: '/'
  },
  entry: [ 'babel-polyfill', './main-react.js' ],
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: [/node_modules/, /dist/],
      options: {
        presets: [ 'env', 'react' ]
      }
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  output: {
    filename: './dist/functional-sudoku-game-react.dist.js',
    path: __dirname,
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({
    minify: {
      collapseWhitespace: false,
      collapseInlineTagWhitespace: false,
      removeComments: true,
      removeRedundantAttributes: false
    },
    template: 'sudoku-react.html'
  })]
};
