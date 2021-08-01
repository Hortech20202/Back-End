'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Solo', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      nivel_ph: {
        type: Sequelize.FLOAT
      },
      tipo_solo: {
        type: Sequelize.ENUM,
        values: ['TIPOA', 'TIPOB', 'TIPOC']
      },
      temperatura: {
        type: Sequelize.FLOAT
      },
      tipo_vaso: {
        type: Sequelize.ENUM,
        values: ['TIPOA', 'TIPOB', 'TIPOC']
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
    await queryInterface.dropTable('Solo')
  }
}
