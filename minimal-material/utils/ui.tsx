import {useEffect} from 'react'
import { inDOM } from './adoptStyles'

const {isArray: $isArray} = Array
, statesMap = {
  "disabled": "disabled",
  "hover": "hover",
  "focus-within": "focus-within",
  "focus": "focus",
  "active": "active",
  "checked": "checked",

  "focused": ["focus-within", "focus"],
  "activated": "checked",
  "selected": "checked",
  "pressed": ["hover", "focus-within", "focus", "active"],
  "dragging": "dragging",
}
, replacement = "[data-state-$1]"
, replacementDom = "data-state-$&"
, replacerDom = /.*/

export {
  useStyleAdoptation, states
}

function useStyleAdoptation() {
  return useEffect(() => inDOM({replacement}))
}

function states(...states: Array<keyof typeof statesMap>) {
  const dataSet = {}

  for (let i = states.length; i--;) {
    const state = states[i]
    , cssStates_ = statesMap[state]
    , cssStates = $isArray(cssStates_) ? cssStates_ : [cssStates_]

    for (let i = cssStates.length; i--;)
      dataSet[
        cssStates[i]
        .replace(replacerDom, replacementDom)
      ] = state
  }
  
  return dataSet
}