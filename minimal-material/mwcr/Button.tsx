import { memo, PropsWithChildren } from "react"

const Button = memo(ButtonRender)

export default Button

export {ButtonRender}

function ButtonRender(
  {
    children,
    icon,
    dense,
    raised,
    unelevated,
    outlined
  }
  : PropsWithChildren<Partial<
    {icon: string}
    & Record<"dense"|"raised"|"unelevated"|"outlined", boolean>
  >>
) {
  //  
  const base = "mdc-button"
  , className = Object.entries({dense, raised, unelevated, outlined})
  .map(([k, v]) => v && `${base}--${k}`)
  .filter(Boolean)
  .concat([base, "mdc-ripple-upgraded"])
  .join(" ")
  
  return <button {...{className}}>
    <span className="mdc-button__ripple"></span>
    {
      icon && <i className="material-icons mdc-button__icon">{icon}</i> 
    }
    <span className="mdc-button__label">{children}</span>
  </button>
}