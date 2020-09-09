# MyKanban App by Ichlasul Amal

**Link Deploy :**

* **[Kanban_Server](https://kanabanichlas.herokuapp.com/)**

## API Documentation

  **Create Task**
----
    Make new task in MyKanban App 

* **URL**

  http://localhost:3000/tasks/

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | jsonwebtoken | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | STRING | true |
  | category | STRING | true |


* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
        "id": 1,
        "name": "Membuat SPA",
        "category": "backlog",
        "UserId": 1
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : ["Field Title Cannot Be Empty!"] }
        ```

        OR

        ```json
        { "error" : ["Field Description Cannot Be Empty"] }
        ```

        OR

        ```json
        { "error" : ["Must be in backlog, todo, doing, done."] }
        ```

        OR

        ```json
        { "error" : ["Field Title Null!"] }
        ```
        OR

        ```json
        { "error" : ["Field Category Null!"] }
        ```
        

    OR

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```


----
**Get Tasks**
----
    Get All Task 

* **URL**

  http://localhost:3000/tasks/

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | jsonwebtoken | true |
  
* **URL Params**

   none


* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
            "id": 1,
            "name": "Landing Page",
            "category": "backlog",
            "UserId": 1
        },
        {
            "id": 2,
            "name": "Register Page",
            "category": "backlog",
            "UserId": 1
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
**Get Task**
----
    Get onlyone Task 

* **URL**

  http://localhost:3000/tasks/:id

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | jsonwebtoken | true |
  
* **URL Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | id | INTEGER | true |


* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "id": 1,
        "name": "Landing Page",
        "category": "backlog",
        "UserId": 1
    }
    ```
 
* **Error Response:**

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
**Update Task**
----
    Change Task data to new data 

* **URL**

  http://localhost:3000/tasks/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | jsonwebtoken | true |
  
* **URL Params**

   | key | value | required |
  | :---: | :---: | :---: |
  | id | Integer | true |

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | STRING | true |
  | category | STRING | true |


* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
        "id": 1,
        "name": "Membuat SPA",
        "category": "backlog",
        "UserId": 1
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : ["Field Title Cannot Be Empty!"] }
        ```

        OR

        ```json
        { "error" : ["Field Description Cannot Be Empty"] }
        ```

        OR

        ```json
        { "error" : ["Must be in backlog, todo, doing, done."] }
        ```

        OR

        ```json
        { "error" : ["Field Title Null!"] }
        ```
        OR

        ```json
        { "error" : ["Field Category Null!"] }
        ```
        

    OR

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
**Delete Task**
----
    Delete task  by Id

* **URL**

  http://localhost:3000/tasks/:id

* **Method:**
  
  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | access_token | jsonwebtoken | true |
  
* **URL Params**

   | key | value | required |
  | :---: | :---: | :---: |
  | id | Integer | true |

* **Data Params**

  none


* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "message": "Delete Success!"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : ["Task Not Found!"] }
        ```
        

    OR

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----

**User Register**
----
    New user registration in MyKanban App

* **URL**

  http://localhost:3000/register

* **Method:**
  
  `POST`

* **Request Headers**

   none
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | STRING | true |
  | password | STRING | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
        "email": "ichlasulaja123@gmail.com",
        "password": "$2R8Y4TUxLZasdfasfdasfUXG"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : "email can't be empty" }
        ```

        OR

        ```json
        { "error" : "Email already exist" }
        ```

        OR

        ```json
        { "error" : "invalid email format" }
        ```

        OR

        ```json
        { "error" : "password can't be empty" }
        ```

        OR

        ```json
        { "error" : "Password length more than 8 and less than 16" }
        ```


    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```



----
**User Login**
----
  Login to user account to access MyKanban dashboard (if user already register)

* **URL**

  http://localhost:3000/login

* **Method:**
  
  `POST`

* **Request Headers**

   none
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | STRING| true |
  | password | STRING | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."
    }
    ```
 
* **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "invalid email/password" }
        ``` 

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```
----

**Login With Google**
----
  Returns json data.

* **URL**

  http://localhost:3000/login/google

* **Method:**

  `POST`

* **Request Headers**

| key | value | required |
| :---: | :---: | :---: |
| id_token | googletoken | true |
  
*  **URL Params**
 
   none

* **Data Params**

   none

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImljaGxhc3VsMDk5OUBnbWFpbC5jb20iLCJpYXQiOjE1OTY1MTgxNDV9.XMgRIuuJMX8byn4zhJCS7yXEH-rb96UhErjlQ45ijgQ" }
    ```

* **Error Response:**
  * **Code:** 400 BAD REQUEST <br />
      **Content:** 
      ```json
      { "error" : "Please login via website!" }
      ```
      OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
      **Content:** 
      ```json
      { "error" : "Internal server error" }
      ```