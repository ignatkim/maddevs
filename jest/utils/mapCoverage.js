const {
  createReporter,
} = require('istanbul-api')
const chalk = require('chalk')

const istanbulCoverage = require('istanbul-lib-coverage')
const coverageNode = require('../../coverage/server/coverage-final.json')
const coverageBrowser = require('../../coverage/client/coverage-final.json')

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

reporter.addAll(['json', 'lcov'])
reporter.write(map)

// eslint-disable-next-line no-console
console.log(chalk.green('The consolidation of coverage reports is complete!\n'))
