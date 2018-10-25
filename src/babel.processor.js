const babelJest = require('babel-jest');
const getBaseBabelConfig = require('@socifi/babel-config');

const { extensions, ...config } = getBaseBabelConfig();

module.exports = babelJest.createTransformer(config);
