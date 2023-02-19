**A Study Plan**

Here's the brief introduction about this backend-skill-test that held by MCM teams, to create API of "Rencana Studi Mahasiswa", that include 3 tables, there were:
1. Mahasiswa (Student)
2. Mata Kuliah (Subject)
3. Rencana Studi (Study Plan)

with several condition, as:
1. Input validation
   a. Student Table
      - notEmpty on name input validation 
      - validation on image input, follows as a default image if user didnt upload any of them
      - notEmpty and isEmail format on email input validation
      - validation on password input for notEmpty and RegularExperession of "Minimum eight characters, at least one letter and one number" combination
      -default value of Student role
      -hooks validation for encrypted users data after registered
   b. Subject Table
      - notEmpty on subject_name input validation 
      - isNumeric and notEmpty on sks_number validation 
      - notEmpty on subject code input validation
      - notEmpty on lecture name input validation 
   c.  Study Plan Table
      - isNumeric and notEmpty on total_sks (well its actually better if automatically calculated) validation
      - notEmpty on supervisor input validation
2. 1 Student having 3 maximum for taking the subjects
3. 1 Subject having 4 maxium students
well, i believe i can do much better than this on my code actually, pardon me.

**The Tech Stack**
1. Javascript,
2. Nodejs, 
3. Express,
4. Validator JS,
5. Sequelize,
6. Mysql Database,
7. Multer, using cloudinary for cloud storage [coludinary.com](https://cloudinary.com/)

**How to Install and Run the Project**
1. Make sure you already cloned the project to yours
2. Make sure you already install [mySql](https://www.mysql.com/downloads/) database and setup the credentials
3. Install the dependencies with ($npm i) command
4. run project with ($npm run start) command
