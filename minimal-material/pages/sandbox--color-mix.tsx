import {CSSProperties} from 'react'
import "./sandbox--color-mix.scss"

const lightStarts = [25, 50, 75]
, rgbs = [
  [53, 0, 128],
  [106, 0, 255],
  [181, 128, 255],
]
, mixes = [25, 50, 75]
, lightEnds = [0, 25, 50, 75, 100]
, schemas = ["rgb", "hsl"]

export default function ColorMixing() {
  return <article className="color-mix">{
    schemas.map(schema => <section className={schema}>{
      lightStarts.map((l0, i) => <section {...{key: l0, className: "lightStart", style: {
        "--l0": l0,
        "--red": rgbs[i][0],
        "--green": rgbs[i][1],
        "--blue": rgbs[i][2],
      } as CSSProperties}}>{
        mixes.map(mix => <section {...{key: mix, className: "mix", style: {"--mix": mix} as CSSProperties}}>{
          lightEnds.map(l1 => <section {...{key: l1, style: {"--l1": l1} as CSSProperties}}>
            <div className="overlayed">{`
              ${l0} ${mix} ${l1}
            `}</div>
            <div className="calced"/>
          </section>)
        }</section>)
      }</section>)
    }</section>)
  }
  </article>
}