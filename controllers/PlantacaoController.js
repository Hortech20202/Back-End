const { PlantacaoService } = require('../services')
const plantacaoService = new PlantacaoService()

class PlantacaoController {
  static async delete (req, res) {
    const { id } = req.params

    try {
      const resp = await plantacaoService.delete(id)
      // eslint-disable-next-line eqeqeq
      if (resp == 0) {
        return res.status(404).send()
      }
      return res.status(200).send()
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insert (req, res) {
    const plantacao = req.body
    try {
      const newPlantacao = await plantacaoService.create(plantacao)
      return res.status(201).send(newPlantacao)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PlantacaoController
