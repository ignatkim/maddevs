const base = require('./base.config')

module.exports = {
  ...base,
  roots: ['./server'],
  testEnvironment: 'node',
  coverageDirectory: '<rootDir>/coverage/server',
}
