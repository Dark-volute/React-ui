#!/usr/bin/env bash

user=ubuntu
host=94.191.43.237
src=./docs/
des=/home/ubuntu/react-ui/


rsync -vzrc --delete  --exclude ".git"  --exclude ".env"   --exclude ".circleci"   $src  $user@$host:$des



