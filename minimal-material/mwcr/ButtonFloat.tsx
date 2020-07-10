import { memo, PropsWithChildren } from "react";

const ButtonFloat = memo(ButtonFloatRender);
export default ButtonFloat;
export { ButtonFloatRender };
function ButtonFloatRender({children, icon, mini, extended, reverse}: PropsWithChildren<Partial<{
  icon: string
  mini: boolean
  extended: boolean
  reverse: boolean
}>>) {
  const base = "mdc-fab"
  , Icon = icon && <i className="mdc-fab__icon material-icons">{icon}</i>
  , Label = children && <span className="mdc-fab__label">{children}</span>

  return <button className={
    Object.entries({mini, extended})
    .map(([k, v]) => v && `${base}--${k}`)
    .filter(Boolean)
    .concat(base, "mdc-ripple-upgraded")
    .join(" ")
  }>
    <div className="mdc-fab__ripple"></div>
    {
      reverse ? <>{Label}{Icon}</> : <>{Icon}{Label}</> 
    }
  </button>
}
