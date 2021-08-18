/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  context: __dirname,
  entry: {
    server: path.resolve(__dirname, `../../aws/server.ts`),
    stack: path.resolve(__dirname, `../../aws/stack.ts`),
    hello: path.resolve(__dirname, `../../aws/lambdas/hello.ts`),
    postImages: path.resolve(__dirname, `../../aws/lambdas/postImages.ts`),
    getMovies: path.resolve(__dirname, `../../aws/lambdas/getMovies.ts`),
    postMovies: path.resolve(__dirname, `../../aws/lambdas/postMovies.ts`),
  },
  // externals: [nodeExternals()],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../aws/dist'),
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
