const { SoloService } = require('../services')
const soloService = new SoloService()

class SoloController {
  static async update (req, res) {
    const fields = req.body
    const { id } = req.params

    try {
      const resp = await soloService.update(fields, id)
      // eslint-disable-next-line eqeqeq
      if (resp == 0) {
        return res.status(404).send()
      }
      const updatedEntity = await soloService.findById(id)
      return res.status(200).send(updatedEntity)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insert (req, res) {
    const solo = req.body
    try {
      const newSolo = await soloService.create(solo)
      return res.status(201).send(newSolo)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = SoloController
