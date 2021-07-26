const base = require('./base.config')

module.exports = {
  ...base,
  roots: ['./tests'],
  coverageDirectory: '<rootDir>/coverage/client',
}
