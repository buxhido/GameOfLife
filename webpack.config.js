var webpack = require('webpack');

module.exports = {
  entry: {
    "game-of-life":'./src/game.js',
    "game-of-life.min":'./src/game.js',
  },
  devtool: 'source-map',
  output: {
    filename: "./dist/[name].js",
    libraryTarget: 'umd',
    library: 'EntryPoint'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-es2015', 'babel-preset-stage-0']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};