/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  context: __dirname,
  entry: {
    imageAwsDump: path.resolve(__dirname, `../../tasks/imageAwsDump.ts`),
    movieAwsDump: path.resolve(__dirname, `../../tasks/movieAwsDump.ts`),
  },
  externals: [nodeExternals()],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../tasks/dist'),
    libraryTarget: 'commonjs',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'swc-loader',
      },
    ],
  },
};
