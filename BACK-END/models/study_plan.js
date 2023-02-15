'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class study_plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      study_plan.belongsTo(models.student)
      study_plan.belongsTo(models.subject)
    }
  };
  study_plan.init({
    total_sks: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "Your total sks number, please?"
        }
      }
    },
    supervisor: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : "You supervisor, please!"
        }
      }
    },
    studentId: DataTypes.INTEGER,
    subjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'study_plan',
  });
  return study_plan;
};