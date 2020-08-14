# KANBAN SERVER

## KANBAN! <br />
Hello and Welcome.. <br />
This is a KANBAN BOARD TASK <br />
This is a HACKTIV8 PHASE 2 individual task <br />
## https://kanbandeployedapp.web.app/#
<br /><br />
____
**LOGIN PAGE**
____

* **URL**

  `/login`

* **Method:**
  
  `POST`


* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    
        `{
        "access_token": "GENERATED ACCESSTOKEN",
        "name": "USER NAME",
        "organization": "USER ORGANIZATION"
        }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
<br /><br /><br />
_____

### **REGISTER USER**
----

* **URL**

  `/register`

* **Method:**
  
  `POST`
  
* **Data Params**

      `const input = 
      { 
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
      }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 

        `{
        "name": "John Doe",
        "email": "johndoe@mail.com"
        }`
 

* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
<br /><br /><br />

____
**LOGIN PAGE**
____
  
* **URL**

  `/googlelogin`

* **Method:**
  
  `POST`
  

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    
        `{
        "access_token": "GENERATED ACCESSTOKEN",
        "name": "USER NAME",
        "organization": "USER ORGANIZATION"
        }`
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
<br /><br /><br />

---

**GET ALL TASK**

---

* **URL**

  `/tasks`

* **Method:**
  
  `GET`
  
* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:**
    
        [{
        "id": 6,
        "user": "username",
        "UserId": 1,
        "content": "task content",
        "status": "task status",
        "organization": "User orhanization",
        "createdAt": "time",
        "updatedAt": "time"
        }]
 
** **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR 
<br /><br /><br />

---
**DELETE TASK**

---

* **URL**

  `/tasks/:taskId`

* **Method:**
  
  `DELETE`
  
*  **URL Params**

    `/:taskId`

    **Required:**
 
   `taskId=[integer]`

* **Success Response:**
  
  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR  <br /><br /><br />

---
**ADD TASK**

---

* **URL**

  `/tasks`

* **Method:**
  
  `POST`
  
    **Required:**
 
   `localstorage = access_token`

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:**

        {
        "id": task id,
        "user": "task owner user name",
        "UserId": task owner user id,
        "content": "task content",
        "status": "task status",
        "organization": "task owner organization",
        "updatedAt": "time",
        "createdAt": "time"
        }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR  <br /><br /><br />

---
**GET SPESIFIC TASK**

---

* **URL**

  `/tasks/:taskId`

* **Method:**
  
  `get`

* **Required:**
 
   `:taskId`

   `localstorage = access_token`

* **Success Response:**
  
  * **Code:** 200 <br />
    **Content:** 
    
        {
        "id": task id,
        "user": "task owner user name",
        "UserId": task owner user id,
        "content": "task content",
        "status": "task status",
        "organization": "task owner organization",
        "createdAt": "time"
        "updatedAt": "time",
        }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR  <br /><br /><br />

---
**UPDATE SPESIFIC TASK**

---

* **URL**

  `/tasks/:taskId`

* **Method:**
  
  `POST`

* **Required:**
 
   `:taskId`

   `localstorage = access_token`

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** 
    
        {
        "id": task id,
        "user": "task owner user name",
        "UserId": task owner user id,
        "content": "task content",
        "status": "task status",
        "organization": "task owner organization",
        "createdAt": "time"
        "updatedAt": "time",
        }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR  <br /><br /><br />

---
**UPDATE TASK STATUS**

---

* **URL**

  `/tasks/status/:taskId`

* **Method:**
  
  `PUT`

* **Required:**
 
   `:taskId`

   `localstorage = access_token`

* **Success Response:**
  
  * **Code:** 201 <br />
    **Content:** 
    
        {
        "id": task id,
        "user": "task owner user name",
        "UserId": task owner user id,
        "content": "task content",
        "status": "task status",
        "organization": "task owner organization",
        "createdAt": "time"
        "updatedAt": "time",
        }
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR  <br />
