const path = require('path');

/**
 * Get Jest configuration.
 *
 * @param {string} testing - Testing source code or built code?
 * @param {Object} settings - Extendable settings
 * @returns {Object} Jest settings
 */
module.exports = (testing = 'source', settings) => {
    const isTestingBuild = testing === 'bundle' || testing === 'build';
    const transformIgnoredPackages = ['ui-constants', 'ui-models', 'ui-admin-api-service', 'ui-storages', 'ui-auths'];

    process.env.JEST_JUNIT_OUTPUT = `./tests_results/unit/junit${isTestingBuild ? '-bundle' : ''}.xml`;

    return {
        transform: { '.*': path.resolve(__dirname, 'babel.processor.js') },
        collectCoverage: !isTestingBuild,
        coverageDirectory: 'tests_results/coverage',
        testResultsProcessor: 'jest-junit',
        collectCoverageFrom: ['src/**/*.{js,jsx}'],
        coverageReporters: ['text', 'cobertura', 'lcov'],
        projects: [
            'tests',
        ],
        transformIgnorePatterns: [
            `<rootDir>/node_modules/(?!(${transformIgnoredPackages.map(item => `${item}/src`).join('|')})/)`,
            '<rootDir>/dist',
        ],
        moduleNameMapper: {
            '\\.(css|less)$': 'identity-obj-proxy',
            ...(isTestingBuild ? {
                '(.*)src(.*)': '$1dist$2',
            } : {}),
        },
        ...settings,
    };
};
