const {from: $from} = Array

export {
  inDOM as inDOM
}

// const replacements = {
//   "hover": "___hover",
//   "focus": "___focus",
//   "focus-within": "___focus-within",
//   "active": "___active",
// }
// , adopter = (x: string) => `.${x}`
// , adopterPrefix = "."
// , adopterPostfix = ""

/** Return destroyer callback */
function inDOM({
  /** focus-within should be before focus */
  regex = /:(hover|focus-within|focus|active)/g,
  replacement = ".___$1"
} = {}) {
  const {
    styleSheets,
    //TODO adoptedStyleSheets
    // Largest precedence
    body: host
  } = document
  , styleElement = document.createElement('style')
  , signature = inDOM.name

  styleElement.dataset[signature] = signature
  host.insertAdjacentElement("beforeend", styleElement)

  // For not appended styleElement.sheet === null
  const sheet = /*new CSSStyleSheet()*/ styleElement.sheet 
  
  $from(styleSheets)
  .map(styleSheet => {
    try {
      if ((styleSheet.ownerNode as HTMLElement).dataset?.[signature] === signature)
        return
      styleSheet.rules
    }
    catch(_) { return }
    return $from(styleSheet.rules)
  })
  .flat()  
  .forEach(rule => {
    if (!(rule as CSSStyleRule)?.selectorText)
      return rule && sheet.insertRule(rule.cssText, sheet.rules.length)

    const {selectorText, cssText} = rule as CSSStyleRule
    , selector = selectorText.replace(regex, replacement)

    sheet.insertRule(`${selector},${cssText}`, sheet.rules.length)
  })

  // document.adoptedStyleSheets = [...document.adoptedStyleSheets, ss] 
  
  return () =>
    // document.adoptedStyleSheets = document.adoptedStyleSheets.filter(s => s !== ss)
    host.removeChild(styleElement)
}
