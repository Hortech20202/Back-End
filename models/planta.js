'use strict'
const uuid = require('uuid')
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Planta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Planta.belongsTo(models.Plantacao, {
        foreignKey: 'plantacao_id'
      })
      Planta.belongsToMany(models.Doenca, {
        through: models.DoencaPlanta,
        as: 'doencas',
        foreignKey: 'planta_id',
        otherKey: 'doenca_id'
      })
      Planta.belongsToMany(models.Plantacao, {
        through: models.PlantacaoPlanta,
        as: 'plantacoes',
        foreignKey: 'planta_id',
        otherKey: 'plantacao_id'
      })
    }
  };
  Planta.init({
    nome: DataTypes.STRING,
    especie: DataTypes.BOOLEAN,
    tecnicas_plantio: DataTypes.STRING,
    infos_por_estacao: DataTypes.STRING,
    cor_folhas: DataTypes.STRING,
    num_frutos_colhidos: DataTypes.INTEGER,
    qtd_diaria_agua: DataTypes.FLOAT,
    qtd_media_sementes: DataTypes.INTEGER,
    nivel_incidencia_solar: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Planta'
  })

  Planta.beforeCreate((planta, _) => {
    // eslint-disable-next-line no-return-assign
    return planta.id = uuid.v4()
  })

  return Planta
}
