import "./ripple.scss"

export default function Ripple() {
  const page = "ripple"

  return <article className={page}>
    <button className="ripple"></button>
    <div className="ripple"></div>

    <button className="ripple_2"></button>
  </article>
}