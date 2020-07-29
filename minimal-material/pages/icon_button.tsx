import {PropsWithChildren, CSSProperties } from "react";
import "./icon_button.scss"

const base = "mm0_icon_button" 
, mdcBase = "mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
, mdc__on = "mdc-icon-button--on"
, mdc__focus = "mdc-ripple-upgraded--background-focused"
, mdc__ripple_on = "mdc-ripple-upgraded--foreground-activation"
// , mdc__ripple_off = "mdc-ripple-upgraded--foreground-deactivation"
, mdcIcon = 'material-icons'
, mdcIconButton = `${mdcIcon} mdc-icon-button__icon`
, mdcRippleStyle =             {
  "--mdc-ripple-fg-size": "28px",
  "--mdc-ripple-fg-scale": "1.71429",
  "--mdc-ripple-left": "10px",
  "--mdc-ripple-top": "10px",
} as CSSProperties


export default function Icon() {
  const children = <>
    <i className={`${mdcIconButton} ${mdcIconButton}--on`}>
      favorite
    </i>
    <i className={mdcIconButton}>
      favorite_border
    </i>
  </>

  return  <article className="icon_button">

    <A content="MDC"/>

    <Figure caption="Disabled">
      <button {...{
        disabled: true,
        "className": `${mdcBase} ${mdcIcon}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi disabled"
      }}>wifi</button>
    </Figure>

    <Figure caption="Enabled">
      <button {...{
        "className": `${mdcBase} ${mdcIcon}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi"
      }}>wifi</button>
    </Figure>

    <Figure caption="Hover">
      <button {...{
        "className": `${mdcBase} ${mdcIcon} _hover`,
        "style": mdcRippleStyle,
        "data-cy": "wifi hover"
      }}>wifi</button>
    </Figure>

    <Figure caption="Focus">
      <button {...{
        "className": `${mdcBase} ${mdcIcon} ${mdc__focus}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi focus"
      }}>wifi</button>      
    </Figure>

    <Figure caption="Pressed and focus">
      <button {...{
        "className": `${mdcBase} ${mdcIcon} ${mdc__focus} ${mdc__ripple_on}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi pressed-focusing"
      }}>wifi</button>
    </Figure>


    <Figure caption="Pressed">
      <button {...{
        "className": `${mdcBase} ${mdcIcon} ${mdc__focus} ${mdc__ripple_on}`,
        "style": mdcRippleStyle,
        "data-cy": "wifi pressed"
      }}>wifi</button>
    </Figure>

    <Figure caption="!!! Activated?!">
      <button {...{
        "className": `${mdcBase} ${mdcIcon} ${mdc__on}`,
        "aria-pressed": "true",
        "style": mdcRippleStyle,
        // "data-cy": "wifi activated"
      }}>wifi</button>
    </Figure>

    <Figure caption="Off">
      <button  {...{
        "className": mdcBase,
        "style": mdcRippleStyle,
        "data-cy": "favorite_border"
      }}>{
        children
      }</button>
    </Figure>
    <Figure caption="On">
      <button  {...{
        "className": `${mdcBase} ${mdc__on}`,
        "style": mdcRippleStyle,
        "data-cy": "favorite_border on"
      }}>{
        children
      }</button>
    </Figure>

    <A content="MM state modifiers"/>

    <Figure caption="Disabled">
      <div {...{
        "className": `${base}_disabled content_wifi_icon`,
        "data-cy": "wifi_disabled"
      }}></div>
    </Figure>

    <Figure caption="Enabled">
      <div {...{
        "className": `${base}_ content_wifi_icon`,
        "data-cy": "wifi"
      }}></div>
    </Figure>
    <Figure caption="button Hover">
      <button {...{
        "data-cy": "wifi hover",
        "className": `${base}_hover content_wifi_icon`,
      }}></button>
    </Figure>
    <Figure caption="in-but Focus">
      <input {...{
        "type": "button",
        "data-cy": "wifi focus",
        "className": `${base}_focus content_wifi_icon`,
        "value": "wifi",
      }}/>
    </Figure>
    <Figure caption="input Pressed">
      <input {...{
        "type": "submit",
        "className": `${base}_pressed content_wifi_icon`,
        "value": "wifi",
        "data-cy": "wifi pressed"
      }}/>
    </Figure>

    <Figure caption="Dragging">
      <div {...{
        "className": `${base}_dragging content_wifi_icon`,
        "data-cy": "wifi dragging"
      }}></div>
    </Figure>

    <Figure caption="Activated">
      <div {...{
        "data-cy": "wifi activated",
        "className": `${base}_activated content_wifi_icon`,
      }}></div>
    </Figure>

    <Figure caption="Selected">
      <div {...{
        "data-cy": "wifi selected",
        "className": `${base}_selected content_wifi_icon`,
      }}></div>
    </Figure>

    <Figure caption="checkbox Off">
      <input {...{
        "type": "checkbox",
        "className": `${base}_ content_favorite_toggler`,
        "data-cy": "favorite_border"
      }}/>
    </Figure>
    
    <Figure caption="checkbox On">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "className": `${base}_ content_favorite_toggler`,
        "data-cy": "favorite_border on"
      }}/>
    </Figure>

    <Figure data-cy="bookmark_toggler hover">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "className": `${base}_hover content_bookmark_toggler`
      }}/>
    </Figure>

    <A content="MM in action"/>

    <Figure caption="">
      <input {...{
        "type": "checkbox",
        "className": `${base} content_wifi_icon`,
        // "data-cy": "favorite_border"
      }}/>
    </Figure>

    <Figure caption="">
      <input {...{
        "type": "checkbox",
        "className": `${base}_toggler content_bookmark_toggler`,
        // "data-cy": "favorite_border"
      }}/>
    </Figure>
    
    <A content="TBD"/> 
    
    <ul>
      <li>Bgr based on current color</li>
      <li>Supply ripple</li>
      <li>Hide tooltip on any additional to :hover action</li>
      <li>Elevation @ action</li>
      <li>Error === red</li>
      <li>Transitions</li>
    </ul>
  </article>
}

function Figure({
  caption, children, "data-cy": cy
}: PropsWithChildren<Partial<{
  "caption": string
  "data-cy": string
}>>
) {
  return <figure data-cy={cy}>{
    children
  }{
    caption && <figcaption>{caption}</figcaption>
  }</figure>
}

function A({content}: {content: string}) {
  const id = content.toLowerCase().replace(/[^a-z0-9]/g, '_')
  return <a {...{
    id,
    href: `#${id}`
  }}>{content}</a>
}