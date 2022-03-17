'use strict';
import { Model, Validator } from 'sequelize';
import bycryptjs from 'bcryptjs'

interface UserAttributes {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes>
  implements UserAttributes {
    id!: number;
    email!: string;
    firstName!: string;
    lastName!: string;
    password!: string;

    static associate(models: any) {
      // define association here
      User.hasMany(models.Project, {
        foreignKey: 'userId'
      })
      User.belongsToMany(models.Project, {
        through: 'Backers'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 255]
      }
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        len: [2, 50]
      }
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
