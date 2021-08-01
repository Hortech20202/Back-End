const planta = require('./plantaRoute')
const doenca = require('./doencaRoute')
const solo = require('./soloRoute')
const plantacao = require('./plantacaoRoute')
const agenda = require('./agendaRoute')

module.exports = app => {
  app.use(planta, doenca, solo, plantacao, agenda)
}
