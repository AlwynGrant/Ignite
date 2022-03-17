'use strict';
const { Model } = require('sequelize');

interface BackerAttributes {
    id: number;
    ProjectId: number;
    UserId: number;
    contributeAmount: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Backer extends Model<BackerAttributes>
  implements BackerAttributes {

    id!: number;
    ProjectId!: number;
    UserId!: number;
    contributeAmount!: number;

    static associate(models: any) {
      // define association here
    }
  }
  Backer.init({
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contributeAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'Backer',
  });
  return Backer;
};
