// const Sequelize = require('sequelize')
const { PlantaService } = require('../services')
const plantaService = new PlantaService()

class PlantaController {
  static async findAll (req, res) {
    try {
      const plantas = await plantaService.findAll()
      return res.status(200).send(plantas)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
module.exports = PlantaController
