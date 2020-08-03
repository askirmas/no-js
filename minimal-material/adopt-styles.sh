#!/bin/bash

find ./out -type f -iname '*.css' \
| xargs -d'\n' -I{} sed -i -r 's/:(hover|focus-within|focus|active)/[data-state-\1]/g' {}

exit $?