import { CSSProperties, memo } from "react"

const ButtonIcon = memo(ButtonIconRender)

export default ButtonIcon
export {ButtonIconRender}

function ButtonIconRender({icon}: {icon: string}) {
  return <button
    className="mdc-icon-button material-icons mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
    style={
      {
        "--mdc-ripple-fg-size": "28px",
        "--mdc-ripple-fg-scale": "1.71429",
        "--mdc-ripple-left": "10px",
        "--mdc-ripple-top": "10px",
      } as CSSProperties
    }
  >{icon}</button>
}
