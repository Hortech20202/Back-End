'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class DoencaPlanta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  DoencaPlanta.init({
    planta_id: DataTypes.UUID,
    doenca_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'DoencaPlanta'
  })
  return DoencaPlanta
}
