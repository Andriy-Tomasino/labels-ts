#!/bin/bash 

curl -s http://localhost:3000/api/templates | jq .
