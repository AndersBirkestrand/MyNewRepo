// let animalsSchema = {
//     "$schema": "http://json-schema.org/draft-07/schema#",
//     "$id": "http://zooWebsite.com/schemas/animals.json",
//     "title": "Animals",
//     "description": "Schema for animals in the local zoo",
//     "type": "array",
//     "items": {
//       "type": "object",
//       "properties": {
//         "name": {
//             "type": "string"
//         },
//         "weight": {
//             "type": "string"
//         },
//         "age": {
//             "type": "number"
//         }
//       }
//     }
//   };

{
    "checked": false,
    "dimensions": {
        "width": 5,
        "height": 10
    },
    "id": 1,
    "name": "A green door",
    "price": 12.5,
    "tags": [
        "home",
        "green"
    ]
}


  let taskSchema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "$id": "http://zooWebsite.com/schemas/animals.json",
    "type": "object",
    "title": "task104",
    "description": "Schema for the task in JSON 104",
    "required": [
        "id",
        "name",
        "price",
        "tags" 
    ],
    "properties": {
        "checked": {
            "type": "boolean",
            "default": false,
            "title": "Checked Schema",
            "examples" : [
                false
            ]
        },
        "dimensions": {
            "type": "object",
            "default": {},
            "title": "Dimensions Schema",
            "required": [
                "width",
                "height",
            ],
            "properties": {
                "width": {
                    "type": "integer",
                    "default": 0,
                    "title": "The width schema",
                    "examples": [
                        5
                    ]
                },
                "height": {
                    "type": "integer",
                    "default": 0,
                    "title": "The height schema",
                    "examples": [
                        10
                    ]
                }
            },
            "examples": [{
                "width": 5,
                "height": 10,
            }]
        },
        "id": {
            "type": "integer",
            "default": 0,
            "title": "The id schema",
            "examples": [
                1
            ]
        },
        "name": {
            "type": "string",
            "default": "",
            "title": "the name schema",
            "examples": "a green door",
        },
        "price": {
            "type": "integer",
            "default": 0,
            "title": "the price schema",
            "examples": [
                12.5
            ]
        },
        "tags": {
            "type": "array",
            "default": [],
            "title": "the tags schema",
            "items": {
                "type": "string",
                "title": "the items schema",
                "examples": [
                    "home",
                    "green"
                ]
            },
            "examples": [
                [
                    "home",
                    "green"
                ]
            ]
        },

    },
    "examples": [{
        "checked": false,
        "dimensions": {
            "width": 5,
            "height": 10
        },
        "id":1,
        "name": "A green door",
        "price": 12.5,
        "tags": [
            "home",
            "green"
        ]
    }]

  }