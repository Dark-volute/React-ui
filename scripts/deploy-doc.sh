#!/usr/bin/env bash

rsync -e "ssh -o StrictHostKeyChecking=no" -arvc --exclude .git ~/docs/ ubuntu@94.191.43.237:~/home/ubuntu/react-ui/
