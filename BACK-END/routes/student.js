const express = require("express");
const router = express.Router();
const studentController = require('../controllers/student');
const { authentication, authorization } = require('../middlewares/auth');
const { uploader } = require('../middlewares/multer')

router.get('/list', authentication, authorization, studentController.studentList)
router.post('/login', studentController.login)
router.post('/register', studentController.register)
router.put('/edit/:id', authentication, uploader.single('image'), studentController.updateProfile)
router.get('/find/:id', authentication, authorization, studentController.findById)
router.delete('/delete/:id',authentication, authorization, studentController.deleteStudent)

module.exports = router;