/// <reference types="./defs" />

import {writeFileSync} from 'fs'
import {parse} from 'path'

const globby = require("globby")
 , {keys: $keys} = Object
, {isArray: $isArray} = Array

export default main

main()

function main() {
  const files = globby.sync("src/**/atomic_singletons/*.json", {gitignore: true, absolute: true}) 

  for (let i = files.length; i--;) {
    const jsonPath = files[i]
    , {dir, name} = parse(jsonPath)
    , namespace = name[0] === "_" ? name.slice(1) : name
    , data = readJson<CST.AtomicSingleton>(jsonPath)
    , content: string[] = ["/// generated"]

    for (const id in data) {
      const body = data[id]
      , hasArgs = id.endsWith(')')
      , fullName = `${namespace}--${id}`
      , mixinPostfix = hasArgs ? "" : "()"
      , smallDeclaration = `${id[0] !== "(" ? id : "apply"}${mixinPostfix}`
      , fullDeclaration = `${fullName}${mixinPostfix}`
      , unit: typeof content = []

      if (
        typeof body === "string"
        || typeof body === "number"
        || $isArray(body)
      )
        unit.push(sassLine(namespace, quarkValue2string(body)))
      else {
        for (const prop in body) {
          // prefixed case //TODO "$" and any other
          const property = prop[0] === "-" || prop === namespace
          ? prop
          : `${namespace}-${prop}`

          unit.push(sassLine(property, quarkValue2string(body[prop])))
        }
      }

      // TODO with options
      content.push(
        ...hasArgs
        ? [fullDeclaration/*, smallDeclaration*/]
        .map(d => [`@mixin ${d} {`]
          .concat(unit)
          .concat('}')
       )
       .flat()
       : [
          `@at-root %${fullName} {`,
          ...unit,
          '}'
        ]
      )
    } 

    // TODO add JSchema self-validation
    writeFileSync(`${dir}/${name}.scss`, content.join("\n"))
  }
}

function quarkValue2string(quark: CST.QuarkValue): CST.ValuePrimitive | CST.ValuePrimitive[] {
  switch (typeof quark) {
    case "string":
    case "number":
      return quark
  }
  const  {length} = quark
  , value: CST.ValuePrimitive[] = new Array(length)

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

function quarkFunc2chunks(expression: CST.QuarkFunction): CST.ValuePrimitive | CST.ValuePrimitive[] {
  const fns = $keys(expression)
  , {length} = fns
  , out = new Array<CST.ValuePrimitive>(length)

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

function sassLine(property: string, value: Parameters<typeof join>[1]) {
  return ` ${property}: ${join(' ', value)};`
}

function readJson<T>(path: string): T {
  return require(path)
}

function join(delimiter: string, values: CST.ValuePrimitive | CST.ValuePrimitive[]) :CST.ValuePrimitive {
  return $isArray(values)
  ? values.join(delimiter)
  : values
}