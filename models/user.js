'use strict';

const {encHash} = require("../helpers/encryptor.js")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Task)
    }
  };
  User.init({
    name: {type:DataTypes.STRING,
    validate:{
      notEmpty:{
        args:true,
        msg:"Please fill the name"
      }
    }
    },
    email: {type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:"Please fill the email"
        },
        isEmail:{
          args:true,
          msg:"Please fill the right email format"
        }
      }},
    password: {type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:"Please fill the password"
        },
      }
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance,option)=>{
    instance.organization = "Hacktiv8" //might change this later
    instance.password = encHash(instance.password)
  })
  return User;
};