#!/bin/bash
MY_DIR=$(dirname "$(realpath "$0")")
sass --style=compressed --no-source-map "$MY_DIR/build.scss" "$MY_DIR.css"