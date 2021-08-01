const database = require('../models')

class Services {
  constructor (nomeModelo) {
    this.nomeModelo = nomeModelo
  }

  async findAll () {
    return database[this.nomeModelo].findAll()
  }

  async findById (id) {
    return database[this.nomeModelo].findOne({
      where: {
        id
      }
    })
  }

  async create (data) {
    return database[this.nomeModelo].create(data)
  }

  async update (data, id, transacao = {}) {
    return database[this.nomeModelo].update(data, { where: { id } }, transacao)
  }

  async delete (id) {
    return database[this.nomeModelo].destroy({
      where: {
        id
      }
    })
  }
}

module.exports = Services
