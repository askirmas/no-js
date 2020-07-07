# Resizer

Pure CSS. Check compatibility [::-webkit-scrollbar](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)

```html
<link rel="stylesheet" href="https://askirmas.github.io/no-js/resizebar.css">
```

```css
@import url(https://askirmas.github.io/no-js/resizebar.css);
```
 

```bash
$ npm install --save @kirmas/no-js
```

```scss
@import "~@kirmas/resizebar/core";

```

Demonstration at [demo.html](./demo.html)

## Usage

```html
<div class="resize_controller__right">
    <div class="resize_controller"></div>
    <div>Content</div>
    <div>Resizer skin</div>
</div>
```
```html
<div style="grid-column: 1; grid-row: 1 / span 2; margin-right: calc(-1 * var(--resizer-width))" class="resize_controller__right"/>
<div style="grid-column: 2; grid-row: 1 / span 2; width: var(--resizer-width)">Resizer skin</div>
<div style="grid-column: 1; grid-row: 1">Content 1</div>
<div style="grid-column: 1; grid-row: 2">Content 2</div>
```
TBD
```html
<div style="grid-column: 1 / span 2" class="resize_controller__left"/>
<div>Resizer skin</div>
<div style="grid-row: 1">Content 1</div>
<div style="grid-row: 2">Content 2</div>
```
