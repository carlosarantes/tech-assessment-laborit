'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('vehicles', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey : true, 
        autoIncrement: true, 
        allowNull: false
      },
      value : {
        type: Sequelize.STRING,
        allowNull: false
      },
      year_model : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fuel : {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'brands',
          key : 'id'
        },
        onDelete: 'CASCADE'
      },
      model_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'models',
          key : 'id'
        },
        onDelete: 'CASCADE'
      },
      created_at : {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at : {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('vehicles');
  }
};
