'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class PlantacaoPlanta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  PlantacaoPlanta.init({
    planta_id: DataTypes.UUID,
    plantacao_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'PlantacaoPlanta'
  })
  return PlantacaoPlanta
}
