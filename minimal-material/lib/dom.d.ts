/// <reference lib="dom" />

interface Document {
  adoptedStyleSheets: readonly CSSStyleSheet[]
}
interface CSSRuleList {
  item(index: number): CSSStyleRule | null;
  [index: number]: CSSStyleRule;
}

// "selectorText""style""styleMap""STYLE_RULE""CHARSET_RULE""IMPORT_RULE""MEDIA_RULE""FONT_FACE_RULE""PAGE_RULE""NAMESPACE_RULE" "KEYFRAMES_RULE" "KEYFRAME_RULE" "SUPPORTS_RULE" "type" "cssText" "parentRule" "parentStyleSheet"
interface CSSStyleRule {
  /** Chrome only */
  styleMap?: StylePropertyMap
}

interface StylePropertyMap extends StylePropertyMapReadOnly {}
/** https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly */
interface StylePropertyMapReadOnly extends Readonly <{
  size: number
  entries() :unknown
  /** https://developer.mozilla.org/en-US/docs/Web/API/StylePropertyMapReadOnly/forEach */
  forEach(callbackfn: (value: CSSUnit, property: string, array: StylePropertyMapReadOnly, thisArg: any) => unknown) :void
}> {}

interface _toString {
  toString(): string
}

// TODO investigate Object.getOwnPropertyNames([...document.styleSheets[2].rules].map(({styleMap}) => styleMap).filter(Boolean).map(styleMap => [...styleMap.entries()]).flat().map(([p, vs]) => [p, vs.map(v => [v[Symbol.toStringTag], v])])[0][1][0][1].__proto__)
type CSSUnit = CSSUnitValue | CSSTransformValue

interface CSSUnitValue extends _toString {
  value: number
  unit: "number"
}
interface CSSScale extends _toString {
  is2D: boolean
  length: number
  x: CSSUnitValue
  y: CSSUnitValue
  z: CSSUnitValue
}

type CSSTransformValue = Array<CSSScale>

// type _CssPropTypeMap = {
//   "transform": CSSTransformValue
//   "opacity": CSSUnitValue
// }