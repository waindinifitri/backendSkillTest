**A Study Plan**

Here's the brief introduction about this backend-skill-test that held by MCM teams, to create API of "Rencana Studi Mahasiswa", that include 3 tables, there were:
1. Mahasiswa (Student)
2. Mata Kuliah (Subject)
3. Rencana Studi (Study Plan)

with several condition, as:
1. Input validation

   a. Student Table
      - notEmpty on name input validation,
      - validation on image input, follows as a default image if user didnt upload any of them,
      - notEmpty and isEmail format on email input validation,
      - validation on password input for notEmpty and RegularExperession of "Minimum eight characters, at least one letter and one number" combination,
      -default value of Student role,
      -hooks validation for encrypted users data after registered

   b. Subject Table
      - notEmpty on subject_name input validation,
      - isNumeric and notEmpty on sks_number validation, 
      - notEmpty on subject code input validation,
      - notEmpty on lecture name input validation

   c.  Study Plan Table
      - isNumeric and notEmpty on total_sks (well its actually better if automatically calculated) validation,
      - notEmpty on supervisor input validation,
2. 1 Student having 3 maximum for taking the subjects,
3. 1 Subject having 4 maxium students,

well, i believe i can do much better on the last two point on my code, I should learn more, pardon me.

**The Tech Stack**
1. Javascript,
2. Nodejs, 
3. Express,
4. Validator JS,
5. Sequelize,
6. Mysql Database,
7. Multer, using cloudinary for cloud storage [cloudinary.com](https://cloudinary.com/)

**How to Install and Run the Project**
1. Make sure you already cloned the project to yours
2. Make sure you already install [mySql](https://www.mysql.com/downloads/) database and setup the credentials
3. Install the dependencies with ($npm i) command
4. run project with ($npm run start) command


**API Documentation**

Status Code Response
```
200 - OK                      > Call API success
201 - CREATED                 > Post success
202 - ACCEPTED                > Response/Post success
400 - BAD REQUEST             > Error on client side
404 - NOT FOUND               > Req.bodyrequest endpoint not found
409 - CONFLICT                > User not fill the requirement
500 - INTERNAL SERVER ERROR   > Error on server side
```

An Example of API Documentation of Student Tabble

**Student API**

## GET ({localhost})/ : 
Homepage
```json
Request Header : not needed
```
```json

Request Body: not needed
```
```json

Response: (200 - OK) {
    "message": "This is home page thanks."
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## GET ({localhost})/student/list : 
Get All Student
```json
Request Header {
    "token" : "<your token">
}
```
```json

Request Body: not needed
```
```json

Response: (200 - OK){
  success: true,
	message: "See all the list of student!",
	data: "<student data>"

}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST ({localhost})/student/register : 
Register Student
```json
Request Header : not needed
```
```json
Request Body: {
  "name": "<student name>",
  "email": "<student email>",
  "password": "<student password>"
}
```
```json
Response: (201 - Created){
  {
    "success": true,
    "message": "Success!",
    "data": {
        "image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
        "role": "Student",
        "_id": "<studentId>",
        "name": "<student name>",
        "email": "<student email>",
        "password": "<student password that already hashed>",
        "__v": 0,
        "createdAt": "<student time create>"
    }
  } 
}
```
```json

Response: (500 - Internal Server Error){
  "<Error Message>"
}
```

## POST ({localhost})/student/login :
Student Login
```json
Request Header : {
 not needed
}
```
```json
Request Body: {
  "email": "<student email>",
  "password": "<student password>"
}
```
```json
Response: (200 - OK){
  success: true,
	message: "Success!",
	token: "<your token>"
}
```
```json

Response: (500 - Internal Server Error){
  "success" : false,
  "<Error Message>"
}
```

## PUT ({localhost})/student/edit/:id : 
Edit Students
```json

Request Header : {
  "access_token": "<your access token>"
}
```
```json

Request Body: {
  "name": "<student name>", 
  "image" : "<student image link>",
}
```
```json

Response: (200 - OK){
  {
    "success": true,
    "message": "Profile has been updated!",
    "data": {
        "image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
        "_id": "<studentId>",
        "name": "<student name>",
        "__v": 0,
        "updatedAt": "<student time update>"
    }
  } 
}
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
 
## DELETE ({localhost})/student/delete/:id : 
Delete Student
```json

Request Header : {
  "token": "<your token">
}
```
```json

Request Body: not needed
```
```json

Response: (200 - OK){
  {
    "success": true,
    "message": "Student has been deleted",
    "data": {
        "image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
        "role": "Student",
        "_id": "<studentId>",
        "name": "<student name>",
        "email": "<student email>",
        "__v": 0,
        "deletedAt": "<student time deleted>"
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
 
## GetStudentId ({localhost})/student/:id : 
GetStudent By Id
```json

Request Header : {
  "token": "<your token">
}
```
```json

Request Body: not needed
```
```json

Response: (200 - OK){
     "data": {
        "image": "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png",
        "role": "Student",
        "_id": "5f8ad3f14534ab053414b586",
        "name": "Waindini Nur Fitri",
        "email": "waindini@gmail.com",
        "password": "$2b$10$nsKb5YKYsRiFaPZdNGY6SeXG8USCapztMDsoB4Px260MAsUj9uule",
        "createdAt": "2023-02-15T11:22:25.426Z",
        "updatedAt": "2023-02-15T11:22:25.426Z",
    }
}
```
```json
Response: (500 - Internal Server Error){
  "<Error Message>"
}
```
