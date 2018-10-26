module.exports = {
  entry: [ 'babel-polyfill', './main.js' ],
  output: {
    path: __dirname,
    filename: './dist/functional-sudoku-game.dist.js'
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
