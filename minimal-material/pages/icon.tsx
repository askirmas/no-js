import { CSSProperties } from "react";
import "./icon.scss"

const base = "mm_icon_button" 
, mdcBase = "mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
, mdcIcon = 'material-icons'
, mdcIconButton = `${mdcIcon} mdc-icon-button__icon`
, mdcRippleStyle =             {
  "--mdc-ripple-fg-size": "28px",
  "--mdc-ripple-fg-scale": "1.71429",
  "--mdc-ripple-left": "10px",
  "--mdc-ripple-top": "10px",
} as CSSProperties


export default function Icon() {
  return <article className="icon">
    <section>
      <button {...{
        "className": `${mdcBase} ${mdcIcon}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi"
      }}>
        wifi
      </button>
      <button  {...{
        "className": mdcBase,
        "style": mdcRippleStyle,
        "data-cy": "favorite_border"
      }}>
        <i className={`${mdcIconButton} ${mdcIconButton}--on`}>
          favorite
        </i>
        <i className={mdcIconButton}>
          favorite_border
        </i>
      </button>
    </section>
    <section>
      <div {...{
        "className": `${base} content_wifi`,
        "data-cy": "wifi"
      }}></div>
      <div {...{
        "className": `${base} _hover content_wifi`,
        // "data-cy": "wifi-hover"
      }}></div>
      <div {...{
        "className": `${base} content_favorite_border`,
        "data-cy": "favorite_border"
      }}></div>
      <div {...{
        "className": `${base} _hover content_favorite_border`,
        // "data-cy": "favorite_border-hover"
      }}></div>
    </section>
  </article>
}
