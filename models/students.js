'use strict';
const {encryptPwd} = require('../helpers/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      student.belongsToMany(models.subject, {through: 'models.study_plan'});
      student.hasMany(models.study_plan);
    }
  };
  student.init({
    name: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Insert your name,please!"
        },
      }
    },
    image: {
    type : DataTypes.STRING,
      validate : {
        default : "https://res.cloudinary.com/di02ey9t7/image/upload/v1602432289/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD_l18hzf.png"
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Insert your email address,please!"
        },
        isEmail : {
          msg : "Please fill by an email format, please!"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Fill the password please, thank you!"
        },
        is : "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$",
      }
    },
    role: {
      type : DataTypes.STRING,
      defaultValue : "Student"
    },
  },   
    {
      hooks: {
        beforeBulkUpdate(student){
          student.attributes.password = encryptPwd(student.attributes.password)
        },
        beforeCreate(student){
          student.password = encryptPwd(student.password)
        }
      },
      sequelize,
      modelName: 'students',
    });
    return student;
  };