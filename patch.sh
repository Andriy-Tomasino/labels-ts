#!/bin/bash

if [ -z "$1" ]; then
  echo "Please provide a template ID"
  exit 1
fi

curl -s -X PATCH http://localhost:3000/api/templates/$1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Updated Template",
  "color": "#FF5733"
}' | jq .
