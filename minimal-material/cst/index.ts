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

      if (
        typeof body === "string"
        || typeof body === "number"
        || $isArray(body)
      )
        content.push(`${propIndent}${namespace}: ${join(' ', quarkValue2string(body))}`)
      else {
        for (const prop in body) {
          const property = prop[0] !== "/"
          ? prop
          : `${namespace}-${prop.slice(1)}`
          , value = quarkValue2string(body[prop])

          content.push(`${propIndent}${property}: ${value};`)
        }
      }
      
      content.push('}')
    } 

    writeFileSync(`${dir}/${name}.scss`, content.join("\n"))
  }
}

function quarkValue2string(quark: QuarkValue): ValuePrimitive | ValuePrimitive[] {
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
        value[i] = join(' ', quarkFunc2chunks(token))
    }
  }
  
  return value
}

function quarkFunc2chunks(expression: QuarkFunction): ValuePrimitive | ValuePrimitive[] {
  const fns = $keys(expression)
  , {length} = fns
  , out = new Array<ValuePrimitive>(length)

  for (let i = length; i--;) {
    const fnName = fns[i]
    , value = quarkValue2string(expression[fnName])
    , chunk = `${fnName}(${join(', ', value)})` 
    
    out[i] = chunk
  }

  return length === 1
  ? out[0]
  : out
}

function readJson<T>(path: string): T {
  return require(path)
}

function join(delimiter: string, values: ValuePrimitive | ValuePrimitive[]) :ValuePrimitive {
  return $isArray(values)
  ? values.join(delimiter)
  : values
}