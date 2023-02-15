const express = require("express");
const router = express.Router();

const {subjectController} = require('../controllers/subject');
const { authentication, authorization } = require('../middlewares/auth');
const { uploader } = require('../middlewares/multer')

router.post('/add',authentication, authorization, uploader.single('picture'), subjectController.addSubject)
router.put('/update/:id', authentication, authorization, uploader.single('picture'),subjectController.updateSubject)
router.get('/list', authentication, subjectController.subjectList)
router.get('/find/:id',authentication, subjectController.findById)
router.delete('/delete/:id', authentication, authorization, subjectController.deleteSubject)
router.post('/find/subject_name', subjectController.search)


module.exports = router;