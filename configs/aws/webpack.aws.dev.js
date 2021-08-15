const common = require('./webpack.aws.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: `development`,
  devtool: 'inline-source-map',
});
