import {Fragment} from 'react'
import {mm, Mdc, MdcButton, tMdcButtonProps} from "../Elements"
import content from "../utils/contents"
import "./button.scss"

//TODO from ts-swiss
import {gEntry} from "../utils/ts"
import { states } from '../utils/ui'

const kindTitle: Record<tMdcButtonProps["Kind"], string> = {
  "Text": "Text Button",
  "Raised": "Raised Button",
  "Unelevated": "Unelevated Button",
  "Outlined": "Outlined Button"
}

export default function Buttons() {
  return <article className="button">
    <section>
      {
        Object.entries(kindTitle)
        .map(([Kind, title]: gEntry<typeof kindTitle>) => <Fragment key={Kind}>
          <div>
            <h3 className={Mdc.typography.Subtitle1}>{title}</h3>
            <MdcButton {...{Kind}} label="Default"/>
            <MdcButton {...{Kind}} label="Dense" dense={true}/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite" disabled={true}/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite"/>
            <MdcButton {...{Kind}} label="Icon" icon="favorite" {...states("pressed")}/>
          </div>
          <div>
            <div className={mm.button[Kind]} {...states("disabled")} {...content("favorite", "button")} tabIndex={0}/>
            <button className={mm.button[Kind]} disabled={true} {...content("favorite", "button")} tabIndex={0}/>
            <input type="button" value={"default"} className={mm.button[Kind]} tabIndex={0}/>
            <a href="#" className={mm.button[Kind]} {...content("default", "button")} tabIndex={0}/>
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
