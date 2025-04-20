#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide a template ID"
  exit 1
fi

curl -s -X DELETE http://localhost:3000/api/templates/$1 >/dev/null

curl -s http://localhost:3000/api/templates | jq .
