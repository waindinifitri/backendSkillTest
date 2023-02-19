const { subject } = require('../models')
// const { Op, where } = require('sequelize')

class subjectController {

    static async addSubject (req,res, next) {
        const { subject_name, sks_number, code, lecture  } = req.body;
        try {
            const result = await subject.findOne({
                where: {
                    code
                }
            })
            if (result) {
                res.status(409).json({msg: 'subject already exists.'})
            const found = await study_plan.findOne({
                    where: {
                        studentId : studentId
                    }
                }) 
            if (found.length += 4) {
                    res.status(409).json({
                        msg: "This subject was full capacity!"
                    })
                }    
            } else {
                const newSubject = await subject.create({
                    subject_name, 
                    sks_number,
                    code,
                    lecture
                })
                res.status(201).json({newSubject: newSubject})
            }
            
        } catch (error) {
        console.log(error)
            next(error)
        }
    }


    static async updateSubject (req,res, next) {
        const id = req.params.id;
        const { subject_name, sks_number, code, lecture   } = req.body;
        try {
                const result = await subject.findOne({
                    where: {
                        id
                    }
                })
                if (result) {
                    const updateSubject = await subject.update ({
                        subject_name, sks_number, code, lecture 
                    }, {where: { 
                            id 
                        } 
                    });
                    res.status(201).json({message: 'Woosh, The subject Updated Succesfully!'})
                } else {
                    res.status(404).json({ message: 'Cannot find the subject.'})
                }
        } catch (error) {
            next(error)
        }
    }

    static async subjectList(req, res) {
		console.log("List of All Subject!");
		try {
		  const subject = await subject.findAll({})
	
		  res.status(200).json({subject: subject});
		} catch (err) {
		  res.status(500).json({
			message: err,
		  });
		}
	  }
    
    static async findById (req,res, next) {
        const id = req.params.id;
        try {
            const result = await subject.findOne ({
                where: {
                    id
                }
            })
            if (result) {
                res.status(200).json(result)    
            }
            else {
                res.status(404).json(`The subject is not found.`)
            }
        } 
        catch (error) {
            next(error)
        }
    }

    static async deleteSubject (req,res, next) {
        const id = req.params.id
        try {
            const result = subject.destroy ({
                where: {
                    id
                }
            })
            res.status(200).json({result, msg: 'subject deleted!'})
        } 
        catch (error) {
            next(error)
        }
    }
    //function for search the subject, or actually we can use regex (iLike)
    static async search(req, res, next){
        const { search } = req.body;
        try {             
            const found = await subject.findAll({                 
                where: {                     
                    subject_name: {   //or by lecture name also                      
                        [Op.like]: '%' + search + '%'                     
                    }                 
                }             
            });          
            if(found){                 
                res.status(201).json(found);             
            } else {                 
                res.status(409).json({                     
                    msg: "subject is not found!"                 
                });             
            }              
        }
        catch (error) {
            next (error);
        }
    }
   
}

module.exports = {
    subjectController
}