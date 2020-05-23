#!/bin/bash
options_tmux_args=""
while test $# -gt 0; do
  case "$1" in
    --iterm2)
      options_tmux_args="-CC"
      shift
      ;;
    *)
      shift
      ;;
  esac
done
