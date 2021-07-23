const {
  createReporter,
} = require('istanbul-api')
const istanbulCoverage = require('istanbul-lib-coverage')
const coverageNode = require('../coverage/server/coverage-summary.json')
const coverageBrowser = require('../coverage/client/coverage-summary.json')

const map = istanbulCoverage.createCoverageMap()
map.merge(coverageBrowser)
map.merge(coverageNode)
const reporter = createReporter()

const summary = istanbulCoverage.createCoverageSummary()

map.files().forEach(f => {
  const fc = map.fileCoverageFor(f)
  const s = fc.toSummary()
  summary.merge(s)
})

reporter.addAll(['json', 'text', 'cobertura'])
reporter.write(map)
