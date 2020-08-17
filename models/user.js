'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt.js')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Task, { foreignKey: 'userId' })
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Email cannot be NULL!'
        },
        notEmpty: {
          args: true,
          msg: 'Email cannot be empty!'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Password cannot be NULL!'
        },
        notEmpty: {
          args: true,
          msg: 'Password cannot be empty!'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: async (user) => {
        user.password = await hashPassword(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};