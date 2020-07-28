import { CSSProperties } from "react";
import "./icon_button.scss"

const base = "mm0_icon_button" 
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
  return <article className="icon_button">
    <a id="mdc" href="#mdc">MDC</a>
    <figure>
      <button {...{
        "className": `${mdcBase} ${mdcIcon}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi"
      }}>
        wifi
      </button>
    </figure>
    <figure>
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
    </figure>
    <a id="mm" href="#mm">MM in action</a>
    <figure>
      <div {...{
        "className": `${base} content_wifi`,
        // "data-cy": "wifi"
      }}></div>
    </figure>
    <figure>
      <div {...{
        "className": `${base} content_favorite_border`,
        // "data-cy": "favorite_border"
      }}></div>
    </figure>
    <a id="states" href="#states">MM state modifiers</a>
    <figure>
      <div {...{
        "className": `${base}_ content_wifi`,
        "data-cy": "wifi"
      }}></div>
    </figure>
    <figure {...{
      "data-cy": "wifi-hover"
    }}>
      <div {...{
        "className": `${base}_hover content_wifi`,
      }}></div>
    </figure>
    <figure>
      <div {...{
        "className": `${base}_ content_favorite_border`,
        "data-cy": "favorite_border"
      }}></div>
    </figure>
    <figure {... {
      "data-cy": "favorite_border-hover"
    }}>
      <div {...{
        "className": `${base}_hover content_favorite_border`,
      }}></div>
    </figure>
  </article>
}
