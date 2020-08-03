#!/bin/bash

defaultPattern=":(hover|focus-within|focus|active)"
defaultReplacement="[data-state-\1]"
defaultFileMask="*.css"

dir="$1"
pattern="${2:-$defaltPattern}"
replacement="${3:-$defaltReplacement}"
fileMask="${4:-$defaultFileMask}"

find "$1" -type f -iname "$fileMask" \
| xargs -d'\n' -I{} sed -i -r "s/$pattern/$replacement/gi" {}

exit $?