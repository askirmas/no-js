import { CSSProperties } from "react";
const base = "mm_icon_button" 

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
        <div className={`${base} content_favorites`}></div>
        <div className={`${base} _hover content_favorites`}></div>
        <div className={`${base} _focus content_favorites`}></div>
        <div className={`${base} _active content_favorites`}></div>
      </section>
    </article>
  );
}
