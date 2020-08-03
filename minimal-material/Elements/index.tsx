import {ButtonHTMLAttributes, CSSProperties} from "react"

const mdcPrefix = "mdc-"
, myPrefix = "mm0_"
, mdcRippleStyle =             {
  "--mdc-ripple-fg-size": "28px",
  "--mdc-ripple-fg-scale": "1.71429",
  "--mdc-ripple-left": "10px",
  "--mdc-ripple-top": "10px",
} as CSSProperties

, mdc = {
  "icon": "material-icons",
  "ripple": `${mdcPrefix}ripple-upgraded`,
  "typography": `${mdcPrefix}typography`,
  "button": `${mdcPrefix}button`,
  "iconButton": `${mdcPrefix}icon-button`
}
, mod_on = "--on"
, myTerms = {
  "button": `${myPrefix}button`,
  "icon": `${myPrefix}icon`
}
, Mdc = {
  "typography": {
    "Subtitle1": `${mdc.typography}--subtitle1`
  },
  "ripple": {
    // unbounded changes anything?
    "unbounded": `${mdc.ripple} ${mdc.ripple}--unbounded`,
    "focusing": `${mdc.ripple} ${mdc.ripple}--background-focused`,
    "activating": `${mdc.ripple} ${mdc.ripple}--foreground-activation`,
    // deactivating: `${mdc.ripple} ${mdc.ripple}--foreground-deactivation`  
  },
  "button": {
    "Text": `${mdc.ripple} ${mdc.button}`,
    "Raised": `${mdc.ripple} ${mdc.button} ${mdc.button}--raised`,
    "Unelevated": `${mdc.ripple} ${mdc.button} ${mdc.button}--unelevated`,
    "Outlined": `${mdc.ripple} ${mdc.button} ${mdc.button}--outlined`,
  }  
}
, mm = {
  "button": {
    "Text": `${myTerms.button}_text`,
    "Unelevated": `${myTerms.button}_unelevated`,
    "Outlined": `${myTerms.button}_outlined`,
    "Raised": `${myTerms.button}_raised`,
  },
  "icon": {
    "Button": `${myTerms.icon}_button`,
    "Stater": `${myTerms.icon}_stater`
  }
}

export type tMdcButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  "Kind": keyof typeof Mdc.button
  "label": string
} & Partial<{
  "dense": boolean
  "icon": string
}>

type tMdcIconButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
& Partial<
  {
    "icon": string
    "iconOn": string
    "checked": boolean
  }
>

export {
  mm, myTerms,
  Mdc,
  MdcButton, MdcIconButton,
}


function MdcButton({
  Kind,
  label,
  className = "",
  dense,
  icon,
  ...etc
}: tMdcButtonProps) {
  return <button {...{
    "tabIndex": 1,
    "className": [
      className,
      Mdc.button[Kind],
      dense && `${mdc.button}--dense`,
    ].filter(Boolean).join(" "),
    ...etc
  }}>
    <span className={`${mdc.button}__ripple`}></span>
    {
      icon && <i className={`${mdc.icon} ${mdc.button}__icon`}>{icon}</i>
    }
    <span className={`${mdc.button}__label`}>{label}</span>
  </button>
}

function MdcIconButton({
  icon, iconOn, checked, className = "", ...etc
}: tMdcIconButtonProps) {

  const mdcIconButton_Icon_name = `${mdc.iconButton}__icon`

  , mdcIconButton_Icon_base = `${mdc.icon} ${mdcIconButton_Icon_name}`

  return <button {...{
    "tabIndex": 1,
    "className": [
        className,
        Mdc.ripple.unbounded,
        mdc.iconButton,
        
        !iconOn && mdc.icon,
        checked && `${mdc.iconButton}${mod_on}`,
        
    ].filter(Boolean).join(" "),
    "style": mdcRippleStyle,
    ...etc
  }}>{
    !iconOn
    ? icon
    : <>
      <i className={`${mdcIconButton_Icon_base} ${mdcIconButton_Icon_name}${mod_on}`}>{iconOn}</i>
      <i className={mdcIconButton_Icon_base}>{icon}</i>
    </>
  }</button>
}
