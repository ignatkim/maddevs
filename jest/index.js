/*
This will run jest in 2 different environments, node and browser.
Then it will run `map-coverage.js` to combine the coverage report.
*/
const async = require('async')
const chalk = require('chalk')
const {
  spawn,
} = require('child_process')

function getArgs() {
  /*
  Get all the arguments that are passed in.
  You need to pass it in by doing `npm run jest -- -u`.
  Remember the `--` first.
  It will all go into `jest` config options.
   */
  const args = []
  process.argv.forEach((val, index) => {
    if (index === 0 || index === 1) {
      // first is node path file, second is name of js file
      return
    }
    args.push(val)
  })
  return args
}

function isTestEnv(args, env) {
  const envTestIndex = args.indexOf(`--test=${env}`)
  return envTestIndex > -1
}

function clearOwnOptions(args) {
  /*
  Method to clear our own options.
  This only supports `--test=browser` and `--test=node` for now.
  --test=browser means that we will only run browser tests.
   */
  const cleared = args.slice()
  if (isTestEnv(args, 'browser')) {
    cleared.splice(cleared.indexOf('--test=browser'), 1)
  }
  if (isTestEnv(args, 'node')) {
    cleared.splice(cleared.indexOf('--test=node'), 1)
  }
  return cleared
}

function createCommands(args, modArgs) {
  /*
  Method to create the commands to run.
   */
  const joinedArgs = modArgs.join(' ')
  const commands = []
  const isTestBrowser = isTestEnv(args, 'browser')
  const isTestNode = isTestEnv(args, 'node')

  // Using `./node_modules/.bin/jest` so that people won't need to configure their own $PATH or mistakenly installing `jest` globally
  const pushTestNode = () => commands.push({
    id: 'node',
    cmd: `./node_modules/.bin/jest --config jest/configs/node.config.js ${joinedArgs}`,
  })
  const pushTestBrowser = () => commands.push({
    id: 'browser',
    cmd: `./node_modules/.bin/jest --config jest/configs/browser.config.js ${joinedArgs}`,
  })

  if (isTestNode || isTestBrowser) {
    if (isTestNode) {
      pushTestNode()
    }
    if (isTestBrowser) {
      pushTestBrowser()
    }
  } else {
    pushTestNode()
    pushTestBrowser()
  }
  commands.push({
    id: 'coverage',
    cmd: 'node ./jest/utils/map-coverage.js',
  })
  return commands
}

const args = getArgs()
const modArgs = clearOwnOptions(args)
const commands = createCommands(args, modArgs)

function runExec(cmd) {
  return callback => {
    const dashes = '-'.repeat(cmd.cmd.length)
    // eslint-disable-next-line no-console
    console.log([
      chalk.cyan(dashes),
      chalk.cyan(cmd.cmd),
      chalk.cyan(dashes),
      '',
    ].join('\n'))
    const splitCmd = cmd.cmd.split(' ')
    const spawnedProcess = spawn(splitCmd[0], splitCmd.slice(1), {
      stdio: 'inherit',
    })
    spawnedProcess.on('close', callback)
  }
}

async.series(
  commands.map((cmd, idx) => runExec(cmd, idx)),
)
