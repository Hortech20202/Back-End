'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Plantacao', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      solo_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Solo',
          key: 'id'
        }
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
    await queryInterface.dropTable('Plantacao')
  }
}
