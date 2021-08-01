'use strict'
const uuid = require('uuid')
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Plantacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Plantacao.belongsToMany(models.Planta, {
        through: models.PlantacaoPlanta,
        as: 'plantas',
        foreignKey: 'plantacao_id',
        otherKey: 'planta_id'
      })

      // preciso de uma relação bidirecional entre agenda e plantacao
      // sequelize model:create --name PlantacaoPlanta --attributes plantacao_id:uuid,planta_id:uuid,freezeTableName:true
      Plantacao.hasOne(models.Agenda, {
        onDelete: 'CASCADE',
        foreignKey: 'plantacao_id'
      })
      Plantacao.belongsTo(models.Solo, {
        foreignKey: 'solo_id'
      })
    }
  };
  Plantacao.init({}, {
    sequelize,
    modelName: 'Plantacao',
    freezeTableName: true
  })

  Plantacao.beforeCreate((plantacao, _) => {
    // eslint-disable-next-line no-return-assign
    return plantacao.id = uuid.v4()
  })

  return Plantacao
}
