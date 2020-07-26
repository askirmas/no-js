import "./elevation.scss"

const page = 'elevation'
, iterer = Array(25).fill(0)
, attrs = [
  {
    "key": "mdc",
    "className": "elevation-demo-surface mdc-elevation--z"
  },
  {
    "key": "mm",
    "className": "mm_elevation__"
  }
]

export default function Elevation() {
  return <article className={page}>{
    iterer.map((_, i) =>
      attrs.map(({key, className}) =>
        <div {...{
          "data-cy": i,
          "key": `${key}${i}`
        }}>
          <div {...{
            "className": `${className}${i}`,
          }}>{
            i
          }</div>
        </div>
      )
    )
    .flat()
  }</article>
}
