const { DoencaService } = require('../services')
const doencaService = new DoencaService()

class DoencaController {
  static async findById (req, res) {
    try {
      const { id } = req.params

      const doenca = await doencaService.findById(id)
      if (!doenca) {
        return res.status(404).send(doenca)
      }
      return res.status(200).send(doenca)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insert (req, res) {
    const doenca = req.body
    try {
      const newDoenca = await doencaService.create(doenca)
      return res.status(201).send(newDoenca)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}
module.exports = DoencaController
