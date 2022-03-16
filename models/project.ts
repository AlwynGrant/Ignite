'use strict';
import { Model } from 'sequelize'

interface ProjectAttributes {
  id: number;
  userId: string;
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
    userId!: string;
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
    }
  }
  Project.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    targetLaunchDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fundingCurrent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fundingGoal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    story: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Project',
  });
  return Project;
};
