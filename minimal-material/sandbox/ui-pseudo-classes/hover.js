/*
mousemove
mouseover mouseout
mouseenter mouseleave - no bulb
*/
const {body: host} = document
;["mouseover", "mouseout"]
.forEach(evName => 
  host.addEventListener(evName, ({target, relatedTarget}) => {
    console.log(`${
      evName
    } "${
      target?.id ?? "x"
    }" => "${
      relatedTarget?.id ?? "x"
    }" @ "${
      commonAncestor(target, relatedTarget)?.id ?? "x"
    }"`)
  }
    // not important
  , true)
)

host.addEventListener("mouseout", ({target, relatedTarget}) => moveHover(target, relatedTarget))
host.addEventListener("mouseover", ({target, relatedTarget}) => moveHover(relatedTarget, target))

/**
 * @param {Element|null} node1
 * @param {Element|null} node2
*/
function moveHover(node1, node2) {
  const ancestor = commonAncestor(node1, node2)
  , className = "___hover"
  let pointer = node1
  while (pointer !== ancestor) {
    const {classList} = pointer
    if (!classList?.contains(className))
      break
    classList.remove(className)
    pointer = pointer?.parentElement
  }

  pointer = node2
  while (pointer !== ancestor) {
    const {classList} = pointer
    if (classList?.contains(className))
      break
    classList.add(className)
    pointer = pointer?.parentElement
  }
}

/**
 * @param {Element|null} node1
 * @param {Element|null} node2
*/
function commonAncestor(node1, node2, omitSelf = false) {
  if (!omitSelf) {
    if (node1?.contains(node2))
      return node1
    if (node2?.contains(node1))
      return node2
  }

  /** @type {Set<Element>} */
  const ancestors = new Set()
  let p1 = node1
  , p2 = node2

  do {
    p1 = p1?.parentElement
    if (p1) {
      if (ancestors.has(p1))
        return p1
      else
        ancestors.add(p1)
    }

    p2 = p2?.parentElement
    if (p2) {
      if (ancestors.has(p2))
        return p2
      else
        ancestors.add(p2)
    }
  } while (p1 !== null && p2 !== null)
  return null
}
