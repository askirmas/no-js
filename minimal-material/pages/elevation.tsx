import "./elevation.scss"

export default function Elevation() {
  return <article>
    <div className="elevation-demo-surface mdc-elevation--z0">0dp</div>
    <div className="elevation-demo-surface mdc-elevation--z1">1dp</div>
    <div className="elevation-demo-surface mdc-elevation--z2">2dp</div>
    <div className="elevation-demo-surface mdc-elevation--z3">3dp</div>
    <div className="elevation-demo-surface mdc-elevation--z4">4dp</div>
    <div className="elevation-demo-surface mdc-elevation--z5">5dp</div>
    <div className="elevation-demo-surface mdc-elevation--z6">6dp</div>
    <div className="elevation-demo-surface mdc-elevation--z7">7dp</div>
    <div className="elevation-demo-surface mdc-elevation--z8">8dp</div>
    <div className="elevation-demo-surface mdc-elevation--z9">9dp</div>
    <div className="elevation-demo-surface mdc-elevation--z10">10dp</div>
    <div className="elevation-demo-surface mdc-elevation--z11">11dp</div>
    <div className="elevation-demo-surface mdc-elevation--z12">12dp</div>
    <div className="elevation-demo-surface mdc-elevation--z13">13dp</div>
    <div className="elevation-demo-surface mdc-elevation--z14">14dp</div>
    <div className="elevation-demo-surface mdc-elevation--z15">15dp</div>
    <div className="elevation-demo-surface mdc-elevation--z16">16dp</div>
    <div className="elevation-demo-surface mdc-elevation--z17">17dp</div>
    <div className="elevation-demo-surface mdc-elevation--z18">18dp</div>
    <div className="elevation-demo-surface mdc-elevation--z19">19dp</div>
    <div className="elevation-demo-surface mdc-elevation--z20">20dp</div>
    <div className="elevation-demo-surface mdc-elevation--z21">21dp</div>
    <div className="elevation-demo-surface mdc-elevation--z22">22dp</div>
    <div className="elevation-demo-surface mdc-elevation--z23">23dp</div>
    <div className="elevation-demo-surface mdc-elevation--z24">24dp</div>

    {
      Array(25).fill(0).map((_, i) => <div {...{
        "key": i,
        "className": `mm_elevation__${i}`
      }}>{i}</div>)
    }
  </article>
}
