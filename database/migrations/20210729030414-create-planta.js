'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Planta', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      especie: {
        type: Sequelize.BOOLEAN
      },
      tecnicas_plantio: {
        type: Sequelize.STRING
      },
      infos_por_estacao: {
        type: Sequelize.STRING
      },
      cor_folhas: {
        type: Sequelize.STRING
      },
      num_frutos_colhidos: {
        type: Sequelize.INTEGER
      },
      qtd_diaria_agua: {
        type: Sequelize.FLOAT
      },
      qtd_media_sementes: {
        type: Sequelize.INTEGER
      },
      nivel_incidencia_solar: {
        type: Sequelize.FLOAT
      },
      plantacao_id: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Plantacao',
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
    await queryInterface.dropTable('Planta')
  }
}
