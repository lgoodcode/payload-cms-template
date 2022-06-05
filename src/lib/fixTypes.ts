/**
 * This is used as an npm script to modify the default outputted types from
 * Payload with any custom types we need to set for the front-end. It also
 * calls `prettier` to format it.
 */

/* eslint-disable */
const { readFileSync, writeFileSync } = require('fs')
const path = require('path')
const chalk = require ('chalk')
const { exec } = require('child_process')

console.log(chalk.green('Modifying payload-types.ts...'))

const file = path.join(process.cwd(), 'src', 'types', 'payload-types.ts')
let types = readFileSync(file).toString()

// Removes the inital unused Config interface and comments
for (let i=0; i<7; i++) {
  types = types.replace(/.+\n/, '')
}

types = types.replace(/string \| Media/ig, 'Media')

// Write file with replaced changes
writeFileSync(file, types)

// Prettier format automatically
exec(`prettier --write ${file}`)

console.log(chalk.cyan('Replaced "string | Media" type to "Media"'))

process.on('uncaughtException', (err) => {
  console.error(chalk.red('An unexepctederror has occurred...'))
  console.error(err)
})