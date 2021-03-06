'use strict';

const common = require('./webpack.tasks.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require(`clean-webpack-plugin`);
module.exports = merge(common, {
  mode: `production`,
  devtool: false,
  plugins: [new CleanWebpackPlugin()],
});
