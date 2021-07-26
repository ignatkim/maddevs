const {
  createReporter,
  checkCoverage,
  config,
} = require('istanbul-api')
const path = require('path')
const chalk = require('chalk')

const codeRoot = path.resolve(__dirname, '../../')
const outputDir = path.resolve(codeRoot, 'coverage')

const istanbulCoverage = require('istanbul-lib-coverage')
const coverageNode = require('../../coverage/server/coverage-final.json')
const coverageBrowser = require('../../coverage/client/coverage-final.json')

// ------- configs ------- //
const coverageThreshold = require('../configs/coverageThreshold.config')

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

// ------- Check coverage -------- //
function getConfig(overrides) {
  const cfg = config.loadObject({
    instrumentation: {
      root: codeRoot,
      'include-all-sources': true,
    },
    reporting: {
      dir: outputDir,
    },
  }, overrides)
  return cfg
}

const cfg = getConfig({
  ...coverageThreshold,
})

checkCoverage.run(cfg, err => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log(chalk.red(err))
    process.exit(0)
  }
  // eslint-disable-next-line no-console
  console.log(chalk.green('Coverage check passed'))
})
