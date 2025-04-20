#!/bin/bash

curl -s -X POST http://localhost:3000/api/templates \
-H "Content-Type: application/json" \
-d '{
    "name": "tank",
    "color": "#352972",
    "type": "any",
    "attributes": [
      {
        "name": "type",
        "input_type": "radio",
        "mutable": false,
        "values": [
          "light",
          "heavy"
        ],
        "default_value": "light"
      },
      {
        "name": "damaged",
        "input_type": "checkbox",
        "mutable": false,
        "values": [
          "false"
        ],
        "default_value": "false"
      },
      {
        "name": "visibalePart",
        "input_type": "select",
        "mutable": false,
        "values": [
          "turret",
          "barrel",
          "wheels"
        ],
        "default_value": "turret"
      }
    ]
  }' | jq .
