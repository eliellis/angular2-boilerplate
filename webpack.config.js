'use strict';

const path = require('path');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

module.exports = {
  entry: { app: './app/index.ts' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '',
    sourceMapFilename: '[name].[hash].js.map',
    chunkFilename: '[id].chunk.js',
  },

  devtool: process.env.NODE_ENV === 'production' ?
    'source-map' :
    'inline-source-map',

  resolve: { extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'] },
  plugins: plugins,
  postcss: postcssInit,

  module: {
    preLoaders: [
      loaders.tslint,
    ],
    loaders: [
      loaders.ts,
      loaders.html,
      loaders.css,
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
    ],
    noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ],
  },
};
