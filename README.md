# SOCIFI Default Jest Configuration

[![npm version](https://badge.fury.io/js/socifi-jest-config.svg)](https://badge.fury.io/js/socifi-jest-config)

This is default configuration for jest that test our javascript libraries.

## What is included

Jest packages with junit reporter. It uses babel to parse ECMAScript 6. 

All tests results are generated to tests_results folder. Default folders:

- ./tests - For your test code. All files should be in format *.test.js
- ./src - Your source code
- ./dist - Your compiled bundle.

## How to use it

First, install this package:

```nodemon
npm install socifi-jest-config --save-dev
```

Then create your jest.config.js file:

```javascript
module.exports = require('socifi-jest-config')();
```

This will test your code in src directory and it will generate junit.xml file and coverage report. 

If you want to test your compiled bundle, use:

 ```javascript
 module.exports = require('socifi-jest-config')('bundle');
 ```
 
 Coverage tests are skipped and junit tests will generate junit-bundle.xml file. During the tests all your links to src folder will be replace with link to dist folder.
