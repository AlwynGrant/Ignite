'use strict';
import { Model } from 'sequelize'

interface ProjectAttributes {
  id: number;
  userId: number;
  title: string;
  category: string;
  subTitle: string;
  image: string;
  targetLaunchDate: string;
  fundingCurrent: number;
  fundingGoal: number;
  story: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Project extends Model<ProjectAttributes>
  implements ProjectAttributes {
    id!: number;
    userId!: number;
    title!: string;
    category!: string;
    subTitle!: string;
    image!: string;
    targetLaunchDate!: string;
    fundingCurrent!: number;
    fundingGoal!: number;
    story!: string;

    static associate(models: any) {
      // define association here
      Project.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Project.belongsToMany(models.User, {
        through: 'Backers'
      })
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    subTitle: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    image: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    targetLaunchDate: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fundingCurrent: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fundingGoal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    story: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
