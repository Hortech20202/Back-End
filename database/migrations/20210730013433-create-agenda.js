'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agenda', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      horario: {
        type: Sequelize.TIME
      },
      plantacao_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: 'Plantacao', key: 'id' }
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
    await queryInterface.dropTable('Agenda')
  }
}
