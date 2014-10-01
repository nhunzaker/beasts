var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'sourcemap',

  entry: {
    'build': './src/index.js'
  },

  output: {
    path: __dirname,
    filename: "[name].js",
    sourceMapFilename: '[name].map'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'envify-loader', 'jsx-loader?harmony=true&insertPragma=React.DOM' ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
