import {ButtonHTMLAttributes, CSSProperties} from "react"

const mdcPrefix = 'mdc-'
, myPrefix = 'mm0_'
, mdcRipple_Name = `mdc-ripple-upgraded`
, mdcRipple = {
  unbounded: `${mdcRipple_Name}--unbounded`,
  focusing: `${mdcRipple_Name}--background-focused`,
  activating: `${mdcRipple_Name}--foreground-activation`,
  // deactivating: `${mdcRipple_Name}--foreground-deactivation`
}
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
}
, states = {
  "disabled": ":disabled",
  "focus": ":focus",
  "pressed": ":active",
  "activated": ":checked",
  "selected": "selected",
  "dragging": "dragging",  
  "hover": ':hover'
}
, myTerms = {
  "button": `${myPrefix}button`,
  "icon": `${myPrefix}icon`,
  "iconButton": `${myPrefix}icon_button`,
  "togglerIcon": `${myPrefix}icon_button_toggler` 
}
, Mdc = {
  "typography": {
    "Subtitle1": `${mdc.typography}--subtitle1`
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
    "Toggler": `${myTerms.icon}_button_toggler`
  }
}

export type tMdcButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  "Kind": keyof typeof Mdc.button
  "label": string
} & Partial<{
  "disabled": boolean | string
  "dense": boolean | string
  "icon": string
}>

export {
  mm, myTerms, state,
  Mdc, mdcRipple,
  MdcButton, MdcIconButton,
}


function MdcButton({
  Kind,
  label,
  className = "",
  dense,
  icon,
  disabled,
}: tMdcButtonProps) {
  return <button {...{
    "className": `${
      className
    } ${
      Mdc.button[Kind]
    } ${
      dense ?`${mdc.button}--dense` : ''
    }`,
    "disabled": !!disabled
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
}: ButtonHTMLAttributes<HTMLButtonElement>
& Partial<
  {
    icon: string
    iconOn: string
    checked: boolean
  }
>) {

  const mod_on = "--on"
  , mdcIcon = 'material-icons'
  , mdcIconButton_Name = "mdc-icon-button"
  // unbounded changes anything?
  , ripple = `${mdcRipple_Name} ${mdcRipple.unbounded}`
  , mdcIconButton_Base = `${mdcIconButton_Name}`
  , mdcIconButton__Oning = `${mdcIconButton_Name}${mod_on}`
  
  , mdcIconButton_Icon_name = `${mdcIconButton_Name}__icon`

  , mdcIconButton_Icon_base = `${mdcIcon} ${mdcIconButton_Icon_name}`
  , mdcIconButton_Icon__on = `${mdcIconButton_Icon_base} ${mdcIconButton_Icon_name}${mod_on}`

  return <button {...{
    ...etc,
    "className": [
        className,
        ripple,
        mdcIconButton_Base,
        
        !iconOn && mdcIcon,
        checked && mdcIconButton__Oning,
        
    ].filter(Boolean).join(' '),
    "style": mdcRippleStyle
  }}>{
    !iconOn
    ? icon
    : <>
      <i className={mdcIconButton_Icon__on}>{iconOn}</i>
      <i className={mdcIconButton_Icon_base}>{icon}</i>
    </>
  }</button>
}

function state(s: keyof typeof states) {
  return {
    "data-state": states[s]
  }
}