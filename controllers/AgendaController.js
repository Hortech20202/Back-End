const { AgendaService } = require('../services')
const agendaService = new AgendaService()

class AgendaController {
  static async delete (req, res) {
    const { id } = req.params

    try {
      const resp = await agendaService.delete(id)
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
    const agenda = req.body
    try {
      const newAgenda = await agendaService.create(agenda)
      return res.status(201).send(newAgenda)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = AgendaController
