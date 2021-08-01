'use strict'
const uuid = require('uuid')
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Solo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Solo.hasMany(models.Plantacao, {
        foreignKey: 'solo_id'
      })
    }
  };
  Solo.init({
    nivel_ph: DataTypes.FLOAT,
    tipo_solo: DataTypes.ENUM('TIPOA', 'TIPOB', 'TIPOC'),
    temperatura: DataTypes.FLOAT,
    tipo_vaso: DataTypes.ENUM('TIPOA', 'TIPOB', 'TIPOC')
  }, {
    sequelize,
    modelName: 'Solo',
    freezeTableName: true
  })

  Solo.beforeCreate((solo, _) => {
    // eslint-disable-next-line no-return-assign
    return solo.id = uuid.v4()
  })

  return Solo
}
