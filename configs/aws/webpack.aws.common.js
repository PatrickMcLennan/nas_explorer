'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: {
    server: path.resolve(__dirname, `../../aws/server.ts`),
    stack: path.resolve(__dirname, `../../aws/stack.ts`),
    hello: path.resolve(__dirname, `../../aws/lambdas/hello.ts`),
    postImages: path.resolve(__dirname, `../../aws/lambdas/postImages.ts`),
    getMovies: path.resolve(__dirname, `../../aws/lambdas/getMovies.ts`),
    postMovies: path.resolve(__dirname, `../../aws/lambdas/postMovies.ts`),
    presignedUrl: path.resolve(__dirname, `../../aws/lambdas/presignedUrl.ts`),
  },
  externals: {
    'aws-sdk': 'aws-sdk',
    '/tmp/node_modules/aws-sdk': 'aws-sdk',
    ...nodeExternals(),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../aws/dist'),
    libraryTarget: 'commonjs',
  },

  resolve: {
    extensions: ['.ts', '.ts', '.js', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'swc-loader',
      },
    ],
  },
};
