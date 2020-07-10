import { CSSProperties, memo } from "react"

const ButtonToggler = memo(ButtonTogglerRender)

export default ButtonToggler
export {ButtonTogglerRender}

function ButtonTogglerRender({icon, iconOn}: {icon: string, iconOn: string}) {
return <button
    className="mdc-icon-button mdc-ripple-upgraded--unbounded mdc-ripple-upgraded"
    aria-pressed="false"
    aria-label="Add to favorites"
    style={{
      "--mdc-ripple-fg-size": "28px",
      "--mdc-ripple-fg-scale": "1.71429",
      "--mdc-ripple-left": "10px",
      "--mdc-ripple-top": "10px",
    } as CSSProperties}
  >
    <i className="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">{iconOn}</i>
    <i className="material-icons mdc-icon-button__icon">{icon}</i>
  </button>
}

