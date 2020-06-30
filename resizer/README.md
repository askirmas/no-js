# Resizer

Pure CSS. Check compatibility [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

Demonstration at [demo.html](./demo.html)

Compiled to [style.css](./style.css) 

Sources: [index.scss](./index.scss) and [core.scss](./core.scss)

Additional files: Sass compile command [build.sh](./build.sh) and resizer investigation [resizer.html](./resizer.html)

## Usage
### HTML without installation
```html
<link href="https://askirmas.github.io/no-js/resizer/style.css" rel="stylesheet" type="text/css">
<div class="resize-container-left">
    <div class="resize-controller"></div>
    <div>Content</div>
    <div>Resizer skin</div>
</div>
```
### Installation
```bash
$ npm install --save @kirmas/no-js
```

### SCSS
```scss
@import '~@kirmas/no-js/resizer/style';
```
