### Methodology

1. Consts / params
2. CSS Values (quarks)

3. Singletons (atoms)
4. Snippets (molecules)
5. Fusions roles
6. Packed classes

Tokens

```html
<div class="b1 b3 whatever b2 b4__e0 b5__e5--m"></div>
```

High-level description

```html
<div class="BLOCK BLOCK--MOD1 BLOCK__ELEMENT BLOCK__ELEMENT--MOD2"></div>
```



## Sass understanding

## Declarations

```scss
$param: 1 !default;
$const: 2;
// $global
@mixin mixin() {    
}
%template {
}
@function function() {
    
}
$object-map: ();
```

## Importings

```scss
@use "...";
@import "...";
& {
    @import "...";
}
```

### Body

```scss
{
// Singletons only
    // Exact value
    width: max-content;
    // Quark value
    width: $width--max-content;
    // Quark function
    width: width--max-content();
// Anywhere
    @import "width/max-content";
    @include map2body($width--max-content);
    @extend %width--max-content;
    @include width--max-content();
}
```

### Propagation

```scss
@mixin theme($mode) {
    @content(
        $color: if($mode == "dark", black, white);
    );
}

@mixin makeColors {
// Looks like sugar for multi-assign that is salt for object
    @include theme("light") using ($color) {
		color: $color;
        background-color: $color;
        border-color: $color;
    }
}

```

### Notes

- `@include` tolerant to delimiter
- `%template` stacks  