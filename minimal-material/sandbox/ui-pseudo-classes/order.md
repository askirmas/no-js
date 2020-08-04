## Hover
:hover -> over -> enter

:not(:hover) -> out -> leave

## Active
- FF

:not(:active) -> down -> :active -> up -> :not(:active) -> click

- Chrome

:active -> down -> :not(:active) -> up  -> click

## Focuses
### 2 self 
:focus:focus-within -> focus -> focusin

### 2 child
:focus-within -> focusin

### self 2 child 
:not(:focus) -> blur -> focusout -> focusin

### child 2 self

focusout -> focus -> focusin

### child 2

:not(:focus-within) -> focusout

### self 2 
:not(:focus):not(:focus-within) -> blur -> focusout

## Focus and click

down --> focus --> focusin --> up