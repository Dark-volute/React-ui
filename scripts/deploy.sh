#!/usr/bin/env bash


if [ -n "$1" ]; then
git add . && \
git commit -am "$1" && \
npm version patch
else
  echo "Enter commit message"
  exit 0
fi

