#!/bin/bash
MY_DIR=$(dirname "$(realpath "$0")")
sass --style=compressed --no-source-map "$MY_DIR/index.scss" "$MY_DIR/style.css"