'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      subTitle: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      targetLaunchDate: {
        type: Sequelize.STRING
      },
      fundingCurrent: {
        type: Sequelize.INTEGER
      },
      fundingGoal: {
        type: Sequelize.INTEGER
      },
      story: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};