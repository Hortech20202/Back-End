'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DoencaPlanta', {
      planta_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      doenca_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('DoencaPlanta')
  }
}
