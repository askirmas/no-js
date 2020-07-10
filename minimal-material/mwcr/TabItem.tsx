import { memo, CSSProperties, PropsWithChildren, AriaAttributes } from "react"

const TabItem = memo(TabItemRender)

export default TabItem
export {TabItemRender}

function TabItemRender({children, icon, checked = false, vertical = false}: PropsWithChildren<{icon?: string, checked?: boolean, vertical?: boolean}>) {
  return <button {...{
    "className": `mdc-tab${
      !checked ? "" : " mdc-tab--active"
    }${
      !vertical ? "" : " mdc-tab--stacked"
    }`,
    "role": "tab",
    "aria-selected": `${checked}` as AriaAttributes["aria-selected"],
    "tabIndex": checked ? 0 : -1
  }}
>
  <span className="mdc-tab__content">
    {
      icon && <span
        className="mdc-tab__icon material-icons"
        aria-hidden="true"
      >{icon}</span>
    }
    <span className="mdc-tab__text-label">{children}</span>
  </span>
  <span className={`mdc-tab-indicator${!checked ? "" : " mdc-tab-indicator--active"}`}>
    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
  </span>
  <span
    className="mdc-tab__ripple mdc-ripple-upgraded"
    style={
      {
        "--mdc-ripple-fg-size": "189px",
        "--mdc-ripple-fg-scale": "1.74454",
        "--mdc-ripple-fg-translate-start":
          "103.5px, -69.2813px",
        "--mdc-ripple-fg-translate-end": "63.5469px, -70.5px",
      } as CSSProperties
    }
  ></span>
</button>  
}