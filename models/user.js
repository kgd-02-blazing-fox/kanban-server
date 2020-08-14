'use strict';

const {encHash} = require("../helpers/encryptor.js")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
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
    },
    organization: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance,option)=>{
    if(!instance.organization) instance.organization="Hacktiv8"
    if (instance.password) instance.password = encHash(instance.password)
  })
  return User;
};