#!/usr/bin/env bash


if [ -n "$1" ]; then
git add . && \
git commit -am "$1" && \
npm version patch && \
git push
else
  echo "Enter commit message"
  exit 0
fi


user=ubuntu
host=94.191.43.237
src=./docs/
des=/home/ubuntu/react-ui/

if [[ -n "$2" && "$2" == "doc" ]]; then
rsync -vzrc --delete  --exclude ".git"  --exclude ".env"   --exclude ".circleci"   $src  $user@$host:$des
fi