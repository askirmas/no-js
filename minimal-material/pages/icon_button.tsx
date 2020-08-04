import {Mdc, MdcIconButton,  mm } from "../Elements"
import { Figure, A } from "../Components"
import content from "../utils/contents"

import "../styles/icon_button.scss"
import { states } from '../utils/ui'

export default function Icon() {  
  return  <article className="icon_button">

    <A content="MDC"/>

    <Figure caption="Disabled">
      <MdcIconButton icon="wifi" data-cy="wifi disabled" disabled={true}/>
    </Figure>

    <Figure caption="Enabled">
      <MdcIconButton icon="wifi" data-cy="wifi"/>
    </Figure>

    <Figure caption="Hover">
      <MdcIconButton icon="wifi" data-cy="wifi hover" {...states("hover")}/>
    </Figure>

    <Figure caption="Focus">
      <MdcIconButton icon="wifi" className={Mdc.ripple.focusing} data-cy="wifi focus"/>
    </Figure>

    <Figure caption="Pressed and focus">
      <MdcIconButton icon="wifi" className={`${Mdc.ripple.focusing} ${Mdc.ripple.activating}`} data-cy="wifi pressed-focusing"/>
    </Figure>

    <Figure caption="Pressed and hover">
      <MdcIconButton icon="wifi" className={Mdc.ripple.activating} data-cy="wifi pressed-hover" {...states("hover")}/>
    </Figure>

    <Figure caption="Pressed">
      <MdcIconButton icon="wifi" className={Mdc.ripple.activating} data-cy="wifi pressed"/>
    </Figure>

    <Figure caption="!!! Activated?!">
      {/* "data-cy": "wifi activated" */}
      <MdcIconButton icon="wifi" checked={true} aria-pressed="true"/>
    </Figure>

    <Figure caption="Off">
      <MdcIconButton icon="favorite_border" iconOn="favorite" data-cy="favorite_border"/>
    </Figure>
    <Figure caption="On">
      <MdcIconButton icon="favorite_border" iconOn="favorite" data-cy="favorite_border on" checked={true}/>
    </Figure>

    <A content="MM state modifiers"/>

    <Figure caption="Disabled">
      <div className={mm.icon.Button} data-cy="wifi disabled" {...content("wifi", "icon")} {...states("disabled")}></div>
    </Figure>

    <Figure caption="Enabled">
      <div {...{
        "className": mm.icon.Button,
        ...content("wifi", "icon"),
        "data-cy": "wifi"
      }}></div>
    </Figure>
    <Figure caption="button Hover">
      <button {...{
        "data-cy": "wifi hover",
        "className": mm.icon.Button,
        ...content("wifi", "icon"),
        ...states("hover") 
      }}></button>
    </Figure>
    <Figure caption="in-but Focus">
      <input {...{
        "type": "button",
        "data-cy": "wifi focus",
        "className": mm.icon.Button,
        ...content("wifi", "icon"),
        "value": "wifi",
        ...states("focus") 
      }}/>
    </Figure>
    <Figure caption="input Pressed">
      <input {...{
        "type": "submit",
        "className": mm.icon.Button,
        ...content("wifi", "icon"),
        "value": "wifi",
        "data-cy": "wifi pressed",
        ...states("pressed") 
      }}/>
    </Figure>

    <Figure caption="Dragging">
      <a {...{
        "href": "#",
        "className": mm.icon.Button,
        ...content("wifi", "icon"),
        "data-cy": "wifi dragging",
        ...states("dragging") 
      }}/>
    </Figure>

    <Figure caption="Activated">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "data-cy": "wifi activated",
        "className": mm.icon.Stater,
        ...content("wifi", "icon"),
        ...states("activated")
      }}/>
    </Figure>

    <Figure caption="checkbox Off">
      <input {...{
        "type": "checkbox",
        "className": mm.icon.Button,
        ...content("favorite", "button"),
        "data-cy": "favorite_border"
      }}/>
    </Figure>

    <Figure caption="checkbox On">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "className": mm.icon.Button,
        "data-cy": "favorite_border on",
        ...content("favorite", "button")
      }}/>
    </Figure>

    <Figure data-cy="bookmark_toggler hover">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "className": `${mm.icon.Button} no-animation`,
        ...content("bookmark", "toggler"),
        ...states("hover")
      }}/>
    </Figure>

    <A content="MM in action"/>

    <Figure caption="">
      <input {...{
        "type": "checkbox",
        "className": mm.icon.Button,
        ...content("bookmark", "toggler"),
        // "data-cy": "${content.bookmark.toggler}"
      }}/>
    </Figure>

    <Figure caption="">
      <input {...{
        "type": "checkbox",
        "className": mm.icon.Stater,
        ...content("favorite", "button")
        // "data-cy": "favorite_button"
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
