import "./palette.scss"

export default function Palette() {
  return <article className="palette">
    <span></span>
    <div className="surface enabled"></div>
    <div className="colored enabled"></div>
    <div className="surface hover"></div>
    <div className="colored hover"></div>
    <div className="surface focus"></div>
    <div className="colored focus"></div>
    <div className="surface selected checked"></div>
    <div className="colored selected"></div>
    <div className="surface activated checked"></div>
    <div className="colored activated"></div>
    <div className="surface pressed"></div>
    <div className="colored pressed"></div>
    <div className="surface dragged"></div>
    <div className="colored dragged"></div>
  </article>
}