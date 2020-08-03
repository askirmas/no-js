import {useEffect} from 'react'
import { inDOM } from './indom'

const replacement = "[data-state-$1]"

export default useStyleAdoptation

function useStyleAdoptation() {
  return useEffect(() => inDOM({replacement}))
}
