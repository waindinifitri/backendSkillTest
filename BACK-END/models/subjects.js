'use strict';
const sequelizePaginate = require('sequelize-paginate')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      subject.belongsToMany(models.user, {through : 'models.study_plan'})
    }
  };
  subject.init({
    subject_name: {
      type : DataTypes.STRING,
      validate :{
        notEmpty: {
          msg : "Please input the name of the subject.",
        }
      }
    },
    sks_number: {
      type: DataTypes.INTEGER,
      validate : { 
        isNumeric: true,
        notEmpty: {
          msg : "Please input the sks of the subject.",
        }
      }
    },
    code: {
      type : DataTypes.TEXT,
      validate : {
        notEmpty : {
          msg : "Please input the subject's code here."
        }
      }
    },
    lecture: {
        type : DataTypes.TEXT,
        validate : {
          notEmpty : {
            msg : "Please input the lecture here."
          }
        }
    },
  }, {
    sequelize,
    modelName: 'subjects',
  });
  sequelizePaginate.paginate(subject);
  return subject;
};  