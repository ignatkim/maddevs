const base = require('./base.config')

module.exports = {
  ...base,
  testResultsProcessor: '<rootDir>/jest/sendCoverageToSlack.js',
}
