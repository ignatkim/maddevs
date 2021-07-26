const {
  checkCoverage,
  config,
} = require('istanbul-api')
const path = require('path')
const chalk = require('chalk')

const codeRoot = path.resolve(__dirname, '../../')
const outputDir = path.resolve(codeRoot, 'coverage')

// ------- configs ------- //
const coverageThreshold = require('../configs/coverageThreshold.config')

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
  console.log(chalk.green('Coverage check passed!\n'))
})
