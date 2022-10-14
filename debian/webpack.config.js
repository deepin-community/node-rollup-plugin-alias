'use strict';
var path = require('path');
var config = {
  target: 'node',
  resolve: {
    modules: ['/usr/lib/nodejs', '.'],
  },
  resolveLoader: {
    modules: ['/usr/lib/nodejs'],
  },
  output: {
    libraryTarget: 'umd'
  },
  module: { rules: [ {test: /\.js$/, loader: 'babel-loader', options: { presets: [ 'es2015' ], plugins: ['add-module-exports'] } }] }
}
module.exports = config;
