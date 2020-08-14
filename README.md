# kanban-server

Providing a kanban services which can be added, manipulated, and deleted later

## POST register new user:

* URL:

        /register

* Method:

        POST

* URL Params:

        None

* Data Params:

        Required:

        name=[string]
        email=[string]
        password=[string]

        Optional:

        organization=[string]

* Success Response:

        Code: 201 CREATED
        Content: {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6IkxhdXJlbnRpdXMgRWRyaWNrIiwiZW1haWwiOiJsYXVyZW50aXVzZWRyaWNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMDUkVWFoS0RqZlZTSTViSktHUE1YOHovZUdXY1oxNmZPeWlpcUFHMFcyMzRkQzBFbVNBbWM3cnEiLCJvcmdhbml6YXRpb24iOiJIYWNrdGl2OCIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMTRUMDg6NTY6NTEuOTQzWiIsImNyZWF0ZWRBdCI6IjIwMjAtMDgtMTRUMDg6NTY6NTEuOTQzWiIsImlhdCI6MTU5NzM5NTQxMn0.Yzf7ASzXCr4i56hZXxtFA1aE95guf5dXXtYuDcBJAZM"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { message : "Validation error" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }


## POST login user:

* URL:

        /login

* Method:

        POST

* URL Params:

        None

* Data Params:

        Required:

        email=[string]
        password=[string]

* Success Response:

        Code: 200 OK
        Content: {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6IkxhdXJlbnRpdXMgRWRyaWNrIiwiZW1haWwiOiJsYXVyZW50aXVzZWRyaWNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMDUkVWFoS0RqZlZTSTViSktHUE1YOHovZUdXY1oxNmZPeWlpcUFHMFcyMzRkQzBFbVNBbWM3cnEiLCJvcmdhbml6YXRpb24iOiJIYWNrdGl2OCIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMTRUMDg6NTY6NTEuOTQzWiIsImNyZWF0ZWRBdCI6IjIwMjAtMDgtMTRUMDg6NTY6NTEuOTQzWiIsImlhdCI6MTU5NzM5NTQxMn0.Yzf7ASzXCr4i56hZXxtFA1aE95guf5dXXtYuDcBJAZM"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { message : "Validation error" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }


## POST Google login user:

* URL:

        /Glogin

* Method:

        POST

* URL Params:

        None

* Data Params:

        None

* Success Response:

        Code: 200 OK
        Content: {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwibmFtZSI6IkxhdXJlbnRpdXMgRWRyaWNrIiwiZW1haWwiOiJsYXVyZW50aXVzZWRyaWNAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMDUkVWFoS0RqZlZTSTViSktHUE1YOHovZUdXY1oxNmZPeWlpcUFHMFcyMzRkQzBFbVNBbWM3cnEiLCJvcmdhbml6YXRpb24iOiJIYWNrdGl2OCIsInVwZGF0ZWRBdCI6IjIwMjAtMDgtMTRUMDg6NTY6NTEuOTQzWiIsImNyZWF0ZWRBdCI6IjIwMjAtMDgtMTRUMDg6NTY6NTEuOTQzWiIsImlhdCI6MTU5NzM5NTQxMn0.Yzf7ASzXCr4i56hZXxtFA1aE95guf5dXXtYuDcBJAZM"
        }

* Error Response:
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }


## GET logged user:

* URL:

        /user

* Method:

        GET

* URL Params:

        None

* Data Params:

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 200 OK
        Content: {
        "name": "John Doe",
        "email": "johndoe@gmail.com",
        "organization": "Hacktiv8"
        }

* Error Response:

        Code: 401 UNAUTHORIZED
        Content: { message : "Invalid token" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }
 

## GET tasks by organization:

* URL:

        /tasks

* Method:

        GET

* URL Params:

        None

* Data Params:

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 200 OK
        Content: [
        {
            "id": 26,
            "title": "Beli makan 2",
            "description": "di pasar",
            "category": "backlog",
            "organization": "Hacktiv8",
            "UserId": 2,
            "createdAt": "2020-08-13T20:16:26.631Z",
            "updatedAt": "2020-08-14T07:11:13.028Z",
            "User": {
                "id": 2,
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "organization": "Hacktiv8",
            }
        },
        {
            "id": 28,
            "title": "Beli minum",
            "description": "",
            "category": "to-do",
            "organization": "Hacktiv8",
            "UserId": 2,
            "createdAt": "2020-08-13T20:16:55.090Z",
            "updatedAt": "2020-08-14T08:44:56.066Z",
            "User": {
                "id": 2,
                "name": "John Doe",
                "email": "johndoe@gmail.com",
                "organization": "Hacktiv8",
            }
        },
        {
            "id": 29,
            "title": "Beli makan",
            "description": "",
            "category": "backlog",
            "organization": "Hacktiv8",
            "UserId": 5,
            "createdAt": "2020-08-14T03:53:10.592Z",
            "updatedAt": "2020-08-14T08:44:57.547Z",
            "User": {
                "id": 5,
                "name": "Laurentius Edrick",
                "email": "laurentiusdummy@gmail.com",
                "organization": "Hacktiv8",
            }
        }
        ]

* Error Response:

        Code: 401 UNAUTHORIZED
        Content: { message : "Invalid token" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }
 

## POST tasks by organization:

* URL:

        /tasks

* Method:

        POST

* URL Params:

        None

* Data Params:

        Required:
        title=[string]

        Optional:
        description=[string]

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 201 CREATED
        Content: {
        "id": 33,
        "title": "Do it!",
        "description": "",
        "category": "backlog",
        "organization": "Hacktiv8",
        "UserId": 1,
        "updatedAt": "2020-08-14T09:12:26.916Z",
        "createdAt": "2020-08-14T09:12:26.916Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { message : "Validation error" }

        Code: 401 UNAUTHORIZED
        Content: { message : "Invalid token" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }


## PUT tasks by organization:

* URL:

        /tasks/:id

* Method:

        PUT

* URL Params:

        Required:
        
        id=[integer]

* Data Params:

        Required:
        title=[string]

        Optional:
        description=[string]

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 200 OK
        Content: {
        "id": 28,
        "title": "changed title",
        "description": "changed description",
        "category": "to-do",
        "organization": "Hacktiv8",
        "UserId": 2,
        "createdAt": "2020-08-13T20:16:55.090Z",
        "updatedAt": "2020-08-14T09:50:23.840Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { message : "Validation error" }

        Code: 401 UNAUTHORIZED
        Content: { message : "Invalid token" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }
 

## PATCH tasks by organization:

* URL:

        /tasks/:id

* Method:

        PATCH

* URL Params:

        Required:

        id=[integer]

* Data Params:

        Required:
        organization=[string]

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 200 OK
        Content: {
        "id": 28,
        "title": "changed title",
        "description": "changed description",
        "category": "backlog",
        "organization": "Hacktiv8",
        "UserId": 2,
        "createdAt": "2020-08-13T20:16:55.090Z",
        "updatedAt": "2020-08-14T09:50:23.840Z"
        }

* Error Response:

        Code: 400 BAD REQUEST
        Content: { message : "Validation error" }

        Code: 401 UNAUTHORIZED
        Content: { message : "Invalid token" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }


## DELETE tasks by organization:

* URL:

        /tasks/:id

* Method:

        DELETE

* URL Params:

        Required:

        id=[integer]

* Data Params:

        Required Headers:
        access_token=[string]

* Success Response:

        Code: 200 OK
        Content: {
        "id": 28,
        "title": "changed title",
        "description": "changed description",
        "category": "backlog",
        "organization": "Hacktiv8",
        "UserId": 2,
        "createdAt": "2020-08-13T20:16:55.090Z",
        "updatedAt": "2020-08-14T09:50:23.840Z"
        }

* Error Response:

        Code: 401 UNAUTHORIZED
        Content: { message : "Invalid token" }
        
        Code: 500 INTERNAL ERROR
        Content: { message : "Internal error" }

