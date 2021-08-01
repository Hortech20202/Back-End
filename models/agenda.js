'use strict'
const uuid = require('uuid')
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Agenda.belongsTo(models.Plantacao, {
        onDelete: 'CASCADE',
        foreignKey: 'plantacao_id'
      })
    }
  };
  Agenda.init({
    horario: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Agenda',
    freezeTableName: true
  })

  Agenda.beforeCreate((agenda, _) => {
    // eslint-disable-next-line no-return-assign
    return agenda.id = uuid.v4()
  })

  return Agenda
}
