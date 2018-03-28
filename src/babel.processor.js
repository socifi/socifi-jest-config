const babelJest = require('babel-jest');
const { getBaseBabelConfig } = require('socifi-rollup-config/src/helpers');

const config = getBaseBabelConfig('commonjs');

module.exports = babelJest.createTransformer({
    ...config,
    plugins: [
        ...config.plugins.filter((item) => {
            return item !== 'external-helpers';
        }),
        [
            'transform-runtime',
            {
                helpers: false,
                polyfill: false,
                regenerator: true,
            },
        ],
    ],
});
