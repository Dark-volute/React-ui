#!/usr/bin/env bash

user=ubuntu
host=94.191.43.237
src=./docs/
des=/home/ubuntu/react-ui/


ssh -o StrictHostKeyChecking=no $user@$host "mkdir test1"

# rsync -vzrc --delete  --exclude ".git"  --exclude ".env"   --exclude ".circleci"   $src  $user@$host:$des



