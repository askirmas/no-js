const postcss = require('postcss')

module.exports = postcss.plugin('postcss-pseudo-classes-control', (opts = {
  
}) => {

  // const selectorRegExp = /(?<!\\):focus-within([^\w-]|$)/gi
  const selectorRegExp = /:(hover|focus|focus-within|active)([^\w-]|$)/gi
  // Work with options here

  return (root, result) => {

    // Transform CSS AST here
    root.walkRules(selectorRegExp, rule => {
      const {selector} = rule
      , mangled = selector.replace(selectorRegExp, "[data-state-$1]$2")
      , clone = rule.clone({
        selector: `${mangled},${selector}`
      })

      rule.replaceWith(clone)
    })
  }
})
