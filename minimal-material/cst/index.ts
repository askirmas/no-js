/// <reference types="./defs" />
import {writeFileSync} from 'fs'
import {parse} from 'path'

const globby = require("globby")
 , {keys: $keys} = Object
, {isArray: $isArray} = Array

export default main

main()

function main() {
  const files = globby.sync("src/**/*.json", {gitignore: true, absolute: true}) 

  for (let i = files.length; i--;) {
    const jsonPath = files[i]
    , {dir, name} = parse(jsonPath)
    , namespace = name[0] === "_" ? name.slice(1) : name
    , data = readJson<AtomicSingleton>(jsonPath)
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
          if ($isArray(body)) {
            content.push(`${propIndent}${namespace}: ${quarkValue2string(body)};`)
            break
          }

          for (const prop in body) {
            const property = prop[0] !== "/"
            ? prop
            : `${namespace}-${prop.slice(1)}`
            , value = quarkValue2string(body[prop])

            content.push(`${propIndent}${property}: ${value};`)
          }
          break
        default:
          throw Error('unknown shape...')
      }
      content.push('}')
    } 

    writeFileSync(`${dir}/${name}.scss`, content.join("\n"))
  }
}

function quarkValue2string(quark: QuarkValue): ValuePrimitive {
  switch (typeof quark) {
    case "string":
    case "number":
      return quark
  }
  const  {length} = quark
  , value: ValuePrimitive[] = new Array(length)

  for (let i = length; i--;) {
    const token = quark[i]
    switch (typeof token) {
      case "string":
      case "number":
        value[i] = token
        continue
      default:
        value[i] = quarkFunc2chunks(token).join(' ')
    }
  }
  
  return value.join(' ')
}

function quarkFunc2chunks(expression: QuarkFunction): ValuePrimitive[] {
  const fns = $keys(expression)
  , {length} = fns
  , out = new Array<ValuePrimitive>(length)

  for (let i = length; i--;) {
    const fnName = fns[i]
    out[i] = `${fnName}(${quarkValue2string(expression[fnName])})`
  }

  return out
}

function readJson<T>(path: string) : T{
  return require(path)
}
