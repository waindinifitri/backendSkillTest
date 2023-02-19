const { student, subject} = require('../models')
const study_plan = require('../models/study_plans')

class studyPlanController {
    static async addStudyPlan(req,res, next) {
        const { total_sks, supervisor } = req.body;
        const subjectId = req.params.id
        const studentId = req.studentsData.id
        
        try {
            const found = await study_plan.findOne({
				where: {
					studentId : studentId
				}
			})
			if (found) {
				res.status(409).json({
					msg: "You already add a study_plan!"
                })
            } else {
                const newStudyPlan = await study_plan.create({
                    total_sks,
                    supervisor,
                    subjectId,
                    studentId 
                });
            }   res.status(201).json({msg : "Good luck for your study_plan!"})
            const addSubject = await study_plan.findOne({
                where: {
                    subjectId : subjectId
                }
            }) 
        if (addSubject.length += 3) {
                res.status(409).json({
                    msg: "You already had 3 subjects on you study plan!"
                })
            }    
        } catch (error) {
            next(error)
        }
    }
    static async getStudyPlan(req,res, next) {
        try {
            const result = await study_plan.findAll({
                order: [['id', 'ASC']],
                include : [
                    student,
                    subject
                ]
            })
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    }

    static async updateStudyPlan(req,res, next) {
        const id = req.params.id;
        const { total_sks, supervisor, studentId, subjectId } = req.body;
        try {
            const result = await study_plan.findOne({
                where :{
                    id,
                }
            })
            if (result) {
                const editStudyPlan = await study_plan.update({
                    total_sks,
                    supervisor,
                    studentId,
                    subjectId 
                }, {where: { 
                    id 
                } 
            });
                res.status(200).json({editStudyPlan, msg : 'study_plan updated'})
            } else {
                res.status(404).json({msg: 'study_plan is not found.'})    
            }
            
        } catch (error) {
            next(error)
        }
    }
   
    static async deleteStudyPlan(req,res, next) {
        const id = req.params.id;
        try {
            const result = await study_plan.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({result, msg : 'study_plan has been deleted'})
        } catch (error) {
            next(error)
        }
    }

}

module.exports = {
    studyPlanController
};