import {Fragment} from 'react'
import {mm, Mdc, MdcButton, tMdcButtonProps, state} from "../Elements"
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
            <MdcButton {...{Kind}} label="Dense" dense={true}/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite"/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite" disabled={true}/>
          </div>
          <div>
            <div className={mm.button[Kind]} {...state("disabled")} {...content("favorite", "button")} tabIndex={1}/>
            <button className={mm.button[Kind]} disabled={true} {...content("favorite", "button")} tabIndex={1}/>
            <input type="button" value={"default"} className={mm.button[Kind]} tabIndex={1}/>
            <div className={mm.button[Kind]} {...content("default", "button")} tabIndex={1}/>
          </div>
        </Fragment>)
      }
      <div>
        <h3 className={Mdc.typography.Subtitle1}>Shaped Button</h3>
        <MdcButton className="demo-button-shaped" Kind="Unelevated" label="Default"/>
        <MdcButton className="demo-button-shaped" Kind="Unelevated" label="Dense" dense={true}/>
        <MdcButton className="demo-button-shaped" Kind="Unelevated" label="Icon" icon="favorite"/>
      </div>
    </section>
  </article>
}
