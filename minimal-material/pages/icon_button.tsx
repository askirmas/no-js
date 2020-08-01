import {mdcRipple, MdcIconButton, state, myTerms} from "../Elements"
import { Figure, A } from "../Components"
import content from "../utils/contents"

import "./icon_button.scss"


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
      <MdcIconButton icon="wifi" data-cy="wifi hover" {...state("hover")}/>
    </Figure>

    <Figure caption="Focus">
      <MdcIconButton icon="wifi" className={mdcRipple.focusing} data-cy="wifi focus"/>
    </Figure>

    <Figure caption="Pressed and focus">
      <MdcIconButton icon="wifi" className={`${mdcRipple.focusing} ${mdcRipple.activating}`} data-cy="wifi pressed-focusing"/>
    </Figure>

    <Figure caption="Pressed and hover">
      <MdcIconButton icon="wifi" className={mdcRipple.activating} data-cy="wifi pressed-hover" {...state("hover")}/>
    </Figure>

    <Figure caption="Pressed">
      <MdcIconButton icon="wifi" className={mdcRipple.activating} data-cy="wifi pressed"/>
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
      <div {...{
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        "data-cy": "wifi disabled",
        ...state("disabled")
      }}></div>
    </Figure>

    <Figure caption="Enabled">
      <div {...{
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        "data-cy": "wifi"
      }}></div>
    </Figure>
    <Figure caption="button Hover">
      <button {...{
        "data-cy": "wifi hover",
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        ...state("hover") 
      }}></button>
    </Figure>
    <Figure caption="in-but Focus">
      <input {...{
        "type": "button",
        "data-cy": "wifi focus",
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        "value": "wifi",
        ...state("focus") 
      }}/>
    </Figure>
    <Figure caption="input Pressed">
      <input {...{
        "type": "submit",
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        "value": "wifi",
        "data-cy": "wifi pressed",
        ...state("pressed") 
      }}/>
    </Figure>

    <Figure caption="Dragging">
      <a {...{
        "href": "#",
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        "data-cy": "wifi dragging",
        ...state("dragging") 
      }}/>
    </Figure>

    <Figure caption="Activated">
      <div {...{
        "data-cy": "wifi activated",
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        ...state("activated")
      }}></div>
    </Figure>

    <Figure caption="Selected">
      <div {...{
        "data-cy": "wifi selected",
        "className": `${myTerms.iconButton}_`,
        ...content("wifi", "icon"),
        ...state("selected")
      }}></div>
    </Figure>

    <Figure caption="checkbox Off">
      <input {...{
        "type": "checkbox",
        "className": `${myTerms.iconButton}_`,
        ...content("favorite", "button"),
        "data-cy": "favorite_border"
      }}/>
    </Figure>

    <Figure caption="checkbox On">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "className": `${myTerms.iconButton}_`,
        "data-cy": "favorite_border on",
        ...content("favorite", "button")
      }}/>
    </Figure>

    <Figure data-cy="bookmark_toggler hover">
      <input {...{
        "type": "checkbox",
        "checked": true,
        "className": `${myTerms.iconButton}_`,
        ...content("bookmark", "toggler"),
        ...state("hover")
      }}/>
    </Figure>

    <A content="MM in action"/>

    <Figure caption="">
      <input {...{
        "type": "checkbox",
        "className": myTerms.iconButton,
        ...content("bookmark", "toggler"),
        // "data-cy": "${content.bookmark.toggler}"
      }}/>
    </Figure>

    <Figure caption="">
      <input {...{
        "type": "checkbox",
        "className": myTerms.togglerIcon,
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
