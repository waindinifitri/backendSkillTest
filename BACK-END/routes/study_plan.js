const express = require("express");
const router = express.Router();

const {studyPlanController} = require('../controllers/study_plan')
const { authentication, authorization } = require('../middlewares/auth')

router.post('/add', authentication, studyPlanController.addStudyPlan)
router.get('/list',authentication,authorization,studyPlanController.getStudyPlan)
router.put('/update/:id',authentication, authorization, studyPlanController.updateStudyPlan)
router.delete('/delete/:id',authentication, authorization, studyPlanController.deleteStudyPlan)

module.exports = router;