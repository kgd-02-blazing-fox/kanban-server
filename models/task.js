'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User)
    }
  };
  Task.init({
    title: {type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:"Task title cannot be empty"
        }
      }
    },
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    organization: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};