const path = require('path');

/**
 * Get Jest configuration file.
 *
 * @param {string} testing - Testing source code or bundle?
 * @param {Object} settings - Extendable settings
 * @returns {Object} Jest settings
 */
module.exports = (testing = 'source', settings) => {
    const isTestingBundle = testing === 'bundle';

    process.env.JEST_JUNIT_OUTPUT = `./tests_results/unit/junit${isTestingBundle ? '-bundle' : ''}.xml`;

    return {
        transform: { '.*': path.resolve(__dirname, 'babel.processor.js') },
        collectCoverage: !isTestingBundle,
        coverageDirectory: 'tests_results/coverage',
        testResultsProcessor: 'jest-junit',
        projects: [
            'tests',
        ],
        transformIgnorePatterns: [
            '<rootDir>/node_modules/(?!(ui-constants/src)/)',
            '<rootDir>/dist',
        ],
        moduleNameMapper: isTestingBundle ? {
            '(.*)src(.*)': '$1dist$2',
        } : {},
        ...settings,
    };
};
