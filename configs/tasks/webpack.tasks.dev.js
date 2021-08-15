const common = require('./webpack.tasks.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: `development`,
  devtool: 'inline-source-map',
});
