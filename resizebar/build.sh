#!/bin/bash
MY_DIR=$(dirname "$(realpath "$0")")
sass "$MY_DIR/build.scss" "$MY_DIR.css" $@
exit $?
