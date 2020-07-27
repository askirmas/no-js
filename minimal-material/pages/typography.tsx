import {createElement} from 'react'
import pageData from "../cypress/fixtures/typography.json"
import "./typography.scss";

const pageName = "typography"

export default function Typoraphy() {
  return <article className={pageName}>
    <Examples prefix="mdc-" delimiter="--"/>
    <Examples tag="div" prefix="mm_" delimiter="_"/>
  </article>
}

function Examples(
  {prefix, delimiter, tag}
  : Record<"prefix"|"delimiter", string> & {tag?: string}
) {
  const children = Object.entries(pageData)
  .map(([key, {tagName, content}]) => createElement(
    tag ?? tagName,
    {
      key,
      "className": `${prefix}${pageName}${delimiter}${key}`,
      "data-cy": key
    },
    content
  ))

  return <section>{children}</section>
}
