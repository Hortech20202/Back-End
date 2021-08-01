'use strict'
const uuid = require('uuid')
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Doenca extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Doenca.belongsToMany(models.Planta, {
        through: models.DoencaPlanta,
        as: 'plantas',
        foreignKey: 'doenca_id',
        otherKey: 'planta_id'
      })
    }
  };
  Doenca.init({
    nome: DataTypes.STRING,
    transmissao: DataTypes.STRING,
    prevencao: DataTypes.STRING,
    tratamento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Doenca',
    freezeTableName: true
  })

  Doenca.beforeCreate((doenca, _) => {
    // eslint-disable-next-line no-return-assign
    return doenca.id = uuid.v4()
  })
  return Doenca
}
