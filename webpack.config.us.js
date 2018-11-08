module.exports = {
  entry: [ 'babel-polyfill', './main-us.js' ],
  output: {
    path: __dirname,
    filename: './dist/functional-sudoku-game-us.dist.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: [ 'env' ]
      }
    }]
  }
};
