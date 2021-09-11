'use strict';
const common = require('./webpack.aws.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = merge(common, {
  mode: `production`,
  devtool: false,
  stats: {
    errorDetails: true,
  },
  plugins: [new CleanWebpackPlugin(), new ForkTsCheckerWebpackPlugin()],
});
