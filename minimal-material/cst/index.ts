import {writeFileSync} from 'fs'
import {parse} from 'path'

const globby = require("globby")
// , {keys: $keys} = Object

type Dict<T> = Record<string, T>
type tAtom = Dict<Dict<string> | string>

export default main

main()

function main() {
  const files = globby.sync("src/**/*.json", {gitignore: true, absolute: true}) 

  for (let i = files.length; i--;) {
    const jsonPath = files[i]
    , {dir, name} = parse(jsonPath)
    , namespace = name[0] === "_" ? name.slice(1) : name
    , data = readJson<tAtom>(jsonPath)
    , content: string[] = ["/// generated"]
    , propIndent = "  "
    
    for (const id in data) {
      const body = data[id]
      content.push(
        `@mixin ${namespace}--${id}() {`
        //TODO
        .replace(")()", ")")
      )
      switch (typeof body) {
        case "string":
        case "number":
          content.push(`${propIndent}${namespace}: ${body};`)
          break
        case "object":
          for (const prop in body)
            content.push(`${propIndent}${prop}: ${body[prop]};`)
          break
        default:
          throw Error('unknown shape...')
      }
      content.push('}')
    } 

    writeFileSync(`${dir}/${name}.scss`, content.join("\n"))
  }
}

function readJson<T>(path: string) : T{
  return require(path)
}
