#!/bin/bash
opt="$1"
pattern="$2"

IFS=$'\n'
#scripts=( $(jq -cr '.scripts | keys | join("\n")' "$PWD/package.json") )
scripts=($(jq -cr '.scripts | to_entries[] | .key,.value' "$PWD/package.json"))

length=${#scripts[@]}
i=0
isFirst="1"

shopt -s extglob
for (( i = 0; i < $length; i++ )); do
  key="${scripts[$i]}"
  i=$(($i+1))
  if [[ "$key" != $pattern ]]; then
    continue
  fi

  value="${scripts[$i]}"

  case "$opt" in 
    "--keys")
      echo "$key"
    ;;
    "--values")
      echo "$value"
    ;;
    "--list")
      [ -z "$isFirst" ] && printf -- ' '
      printf -- "$key"
    ;;
    "--no-hooks")
      [ -z "$isFirst" ] && printf -- '&&'
      printf "($value)"
    ;;
    *) 
      echo "Unknown option '$opt'"
      exit 1
    ;;
  esac

  isFirst=""
done
shopt -u extglob
