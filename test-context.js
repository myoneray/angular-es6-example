'use strict';
let testContext;

require('angular');
require('angular-mocks');

testContext = require.context('./src', true, /\.spec\.js$/);
testContext.keys().forEach(testContext);
