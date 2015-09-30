'use strict';

var webpack             = require('webpack');
var path                = require('path');

var jsLoaders = ["babel-loader?stage=0&optional=runtime"];

module.exports = 
{
  resolve: {
    extensions: ["", ".js", ".json", ".jsx"],
    modulesDirectories: ["node_modules"]
  },
  entry: {
    app: ["../src/router_entry_point.js"]
  },
  plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"', '__DEV__': true }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
      ],
  output: {
    path: "./build",
          publicPath: "/assets/",
          filename: "bundle.js"
          },
  module: {
    loaders: [
             { test: /\.js$/,              loaders: jsLoaders, exclude: /node_modules/ },
             { test: /\.jsx?$/,            loaders: jsLoaders, exclude: /node_modules/ }
             ]
  }
}

