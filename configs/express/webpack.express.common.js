/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  context: __dirname,
  entry: {
    server: path.resolve(__dirname, `../../express/server.ts`),
  },
  externals: [nodeExternals()],

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../express/dist'),
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
        exclude: /node_modules/,
      },
    ],
  },
};
