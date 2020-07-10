import { CSSProperties } from "react";
const base = "mm_icon_button" 
, demo = `${base}__demo`
, stated = `${base} _`

export default function Icon() {
  return (
    <article>
      <section>
        <h3 className="mdc-typography--subtitle1">Icon Button</h3>
        <div>
          <button
            className="mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            aria-label="Add to favorites"
            style={
              {
                "--mdc-ripple-fg-size": "28px",
                "--mdc-ripple-fg-scale": "1.71429",
                "--mdc-ripple-left": "10px",
                "--mdc-ripple-top": "10px",
              } as CSSProperties
            }
          >
            wifi
          </button>
        </div>
        <h3 className="mdc-typography--subtitle1">Icon Toggle Button</h3>
        <div>
          <button
            className="mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
            aria-pressed="false"
            aria-label="Add to favorites"
            style={{
              "--mdc-ripple-fg-size": "28px",
              "--mdc-ripple-fg-scale": "1.71429",
              "--mdc-ripple-left": "10px",
              "--mdc-ripple-top": "10px",
            } as CSSProperties}
          >
            <i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">
              favorite
            </i>
            <i className="material-icons mdc-icon-button__icon">
              favorite_border
            </i>
          </button>
        </div>
      </section>
      <section>
        <style>{`
          .${base}::before {
            content: "favorite";
          }
        `}</style>
        <div className={base}></div>
        <div className={`${stated}hover`}></div>
        <div className={`${stated}focus`}></div>
        <div className={`${stated}active`}></div>
      </section>
    </article>
  );
}
