var webpack = require('webpack');
module.exports = {
  output: {
    jsonpFunction: 'webpackJsonpIonic',
    chunkFilename: '[name].js',
    filename:'[name].js'
  }
};