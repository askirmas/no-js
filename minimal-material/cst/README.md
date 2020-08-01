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
    @include theme("light") {
		color: $color;
        background-color: $color;
        border-color: $color;
    }
}

```

