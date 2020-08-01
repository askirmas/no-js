const contentPrefix = "content_"
, contentData = {
  "favorite": {
    "button": `${contentPrefix}favorite_button`,
  },
  "default": {
    "button": `${contentPrefix}default_button`,
  },
  "wifi": {
    "icon": `${contentPrefix}wifi_icon`
  },
  "bookmark": {
    "toggler": `${contentPrefix}bookmark_toggler`
  }  
}

type tContent = typeof contentData

export default content

function content<K extends keyof tContent>(k: K, v: keyof tContent[K]) {
  return {
    "data-content": [k, v].join("_")
  }
}