import pageData from "../cypress/fixtures/typography.json"
import "./typography.scss";

const pageName = "typography"

export default function Typoraphy() {
  return <article className={pageName}>
    <Examples prefix="mdc-" delimiter="--"/>
    <Examples prefix="mm_" delimiter="_"/>
  </article>
}

function Examples({prefix, delimiter}: Record<"prefix"|"delimiter", string>) {
  const children = Object.entries(pageData)
  .map(([key, {tagName: Tag, content}]) =>
    <Tag {...{
      key,
      "className": `${prefix}${pageName}${delimiter}${key}`,
      "data-cy": key
    }}>{
      content
    }</Tag>
  )

  return <section>{children}</section>
}
