import {Fragment} from 'react'
import {Mdc, MdcButton,MmButton, tMdcButtonProps} from "../Elements"
import content from "../utils/contents"
import "./button.scss"

import {gEntry} from "../utils/ts"

export default function Buttons() {
  const kindTitle: Record<tMdcButtonProps["Kind"], string> = {
    "Text": "Text Button",
    "Raised": "Raised Button",
    "Unelevated": "Unelevated Button",
    "Outlined": "Outlined Button"
  }

  return <article className="button">
    <section>
      {
        Object.entries(kindTitle)
        .map(([Kind, title]: gEntry<typeof kindTitle>) => <Fragment key={Kind}>
          <div>
            <h3 className={Mdc.typography.Subtitle1}>{title}</h3>
            <MdcButton {...{Kind}} label="Default"/>
            <MdcButton {...{Kind}} label="Dense" dense="true"/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite"/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite" disabled="true"/>
          </div>
          <div>
            <MmButton {...{Kind}} className={content.favorite.button} disabled="true"/>
            <MmButton {...{Kind}} className={content.favorite.button}/>
            <MmButton {...{Kind}} className={content.default.button}/>
          </div>
        </Fragment>)
      }
      <div>
        <h3 className={Mdc.typography.Subtitle1}>Shaped Button</h3>
        <MdcButton className="demo-button-shaped" Kind="Unelevated" label="Default"/>
        <MdcButton className="demo-button-shaped" Kind="Unelevated" label="Dense" dense="true"/>
        <MdcButton className="demo-button-shaped" Kind="Unelevated" label="Icon" icon="favorite"/>
      </div>
    </section>
  </article>
}
