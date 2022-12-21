// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
// eslint-disable-next-line no-trailing-spaces

module.exports = merge(common, {
  mode: 'development',
});
