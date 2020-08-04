import "../styles/palette.scss"

export default function Palette() {
  return <article className="palette">
    <span></span>
    <div className="fill surface enabled"></div>
    <div className="fill colored enabled"></div>
    <div className="fill surface hover"></div>
    <div className="fill colored hover"></div>
    <div className="fill surface focus"></div>
    <div className="fill colored focus"></div>
    <div className="fill surface selected checked"></div>
    <div className="fill colored selected"></div>
    <div className="fill surface activated checked"></div>
    <div className="fill colored activated"></div>
    <div className="fill surface pressed"></div>
    <div className="fill colored pressed"></div>
    <div className="fill surface dragged"></div>
    <div className="fill colored dragged"></div>

    <div className="alpha surface enabled"></div>
    <div className="alpha colored enabled"></div>
    <div className="alpha surface hover"></div>
    <div className="alpha colored hover"></div>
    <div className="alpha surface focus"></div>
    <div className="alpha colored focus"></div>
    <div className="alpha surface selected checked"></div>
    <div className="alpha colored selected"></div>
    <div className="alpha surface activated checked"></div>
    <div className="alpha colored activated"></div>
    <div className="alpha surface pressed"></div>
    <div className="alpha colored pressed"></div>
    <div className="alpha surface dragged"></div>
    <div className="alpha colored dragged"></div>
    <mark><h1>WTF: Selected@surface has 3 different colors</h1></mark>
  </article>
}