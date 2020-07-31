#!/usr/bin/env node
const {keys: $keys} = Object
, minimatch = require('minimatch')
, execa = require('execa')
, patterns = process.argv.slice(2)
, allowed = /\/[^\.:]+$/i

class MatchError extends Error {}

module.exports = {
  default: npmRun,
  matching, match
}

if (module.parent === null) {
  main()
}

async function main() {
  const packagePath = require.resolve('./package.json')
  delete require.cache[packagePath];
  const {scripts} = require(packagePath)
  try {
    await npmRun(
      patterns,
      scripts
    )  
  } catch (e) {
    if (e instanceof MatchError)
      console.error(`${e.constructor.name}: ${e.message}`)
    
    process.exit(1)
  }
}

async function npmRun(patterns, scripts) {
  const scriptNames = $keys(scripts)

  for (const pattern of patterns) {
    const scripts2run = scriptNames
    .filter(matching(pattern))

    if (scripts2run.length === 0)
      throw new MatchError(`No scripts found with pattern '${pattern}'`)

    for (const script of scripts2run) {
      await execa('npm', ['run', script], {stdout: 'inherit', stdin: 'inherit', stderr: 'inherit'})
      // try {
    
      // } catch (e) {
      //   process.exit(1)
      // }
    }
  }
}

function matching(pattern) {
  return source => match(source, pattern)
} 

function match(source, pattern) {
  return source.match(allowed) && minimatch(source, pattern)
}
