const { student } = require("../models");
const {decryptPwd} = require('../helpers/bcrypt')
const {tokenGenerator} = require('../helpers/jwt')


class studentController {
	static async register(req, res) {
		const { name, email, password, role } = req.body;
		try {
			const found = await student.findOne({
				where: {
					email
				}
			})
			if (found) {
				res.status(409).json({
					msg: "This email already registered! Input another email account, thanks!"
				})
			} else {
				const student = await student.create({
					name,
					email,
					password,
					role
				});
				const access_token = tokenGenerator(student);
				res.status(201).json(access_token);
			}
		} catch (err) {
			res.status(500).json(err);
		}
	}
	  static async login(req, res, next) {
		const { email, password } = req.body;
		console.log(req.body);
		try {
			const student = await student.findOne({
				where: { email }
			});
			if (student) {
				if(decryptPwd(password, student.password)) {
				const access_token = tokenGenerator(student);
				res.status(200).json({ token : access_token });
			  } else {
				  res.status(409).json({
				  msg: "Incorrect password!"
				})
			  }
			} else{
                res.status(404).json({
                    msg : "Student not found!"
                })
            }
			} catch (err) {
			  next(err);
			}
	}
	
	static async findById(req, res) {
		const id = req.params.id;
		try {
			const student = await student.findOne({
				where: { id }
			});
			if (student) {
                res.status(200).json(student)    
            }
            else {
                res.status(404).json(`Student is not found.`)
            }
        } 
        catch (error) {
            next(error)
        }
	}
    static async updateProfile(req, res) { 
		const id = req.params.id;
		const { name } = req.body;
		const image = req.file.path
		try {
			const found = await student.findOne({ 
                where : { id }
            })
            if (found) {
				student.update({
                    name,
					image,
				}, {
					where: { id },
					}
				);
			}   
			res.status(202).json({
				msg : "Profile has been updated!"
		}); 
		} catch (err) {
			res.status(500).json(err);
		}
	}
	static async studentList(req, res) {
		console.log("See all the list of student!");
		try {
		  const student = await student.findAll({})
	
		  res.status(200).json({student: student});
		} catch (err) {
		  res.status(500).json({
			message: err,
		  });
		}
	  }

	  static async deleteStudent(req,res, next) {
        const id = req.params.id;
        try {
            const result = await student.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({result, msg : 'Student has been deleted'})
        } catch (error) {
            next(error)
        }
    }
}
module.exports = studentController;