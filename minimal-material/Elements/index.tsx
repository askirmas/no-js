import {HTMLAttributes, ButtonHTMLAttributes} from "react"

const mdcPrefix = 'mdc-'
, myPrefix = 'mm0_'
, mdc = {
  "icon": "material-icons",
  "ripple": `${mdcPrefix}ripple-upgraded`,
  "typography": `${mdcPrefix}typography`,
  "button": `${mdcPrefix}button`,
}
, myTerms = {
  "button": `${myPrefix}button`,
  "_disabled": "_disabled"
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
, My = {
  "button": {
    "Text": `${myTerms.button}_text`,
    "Unelevated": `${myTerms.button}_unelevated`,
    "Outlined": `${myTerms.button}_outlined`,
    "Raised": `${myTerms.button}_raised`,
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

export type tMmButtonProps = HTMLAttributes<unknown>
& Partial<{
  "tagName": string
}>
& Parameters<typeof cnButton>[0]

export {
  MmButton,
  Mdc,
  MdcButton,
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

function MmButton({
  tagName: T = "div",
  disabled,
  Kind,
  className = "",
  ...etc
}: tMmButtonProps) {
  return <T {...{
    ...etc,
    className: `${className} ${cnButton({Kind, disabled})}_`
  }}/>  
}

function cnButton({
  disabled,
  Kind = "Text"
}: Partial<{
  "disabled": boolean | string | number
  "Kind": keyof typeof My.button
}>) {
  return `${My.button[Kind]}${disabled ? myTerms._disabled : ""}`
}