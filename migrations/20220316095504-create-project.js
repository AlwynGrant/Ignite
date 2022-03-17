'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      category: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      subTitle: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      image: {
        type: Sequelize.STRING(2000),
        allowNull: false
      },
      targetLaunchDate: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      fundingCurrent: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fundingGoal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      story: {
        type: Sequelize.STRING(5000),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects', { restartIdentity: true });
  }
};
