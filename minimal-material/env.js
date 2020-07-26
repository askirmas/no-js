#!/usr/bin/env node
const {writeFileSync} = require('fs')

writeFileSync("npm-env.json", JSON.stringify(process.env, null, 2))