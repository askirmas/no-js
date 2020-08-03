const contentData = {
  "favorite": {
    "button": null
  },
  "default": {
    "button": null,
  },
  "wifi": {
    "icon": null
  },
  "bookmark": {
    "toggler": null
  }  
}

type tContent = typeof contentData

export default content

function content<K extends keyof tContent>(k: K, v: keyof tContent[K]) {
  return {
    "data-content": [k, v].join("_")
  }
}