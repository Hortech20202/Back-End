const { Router } = require('express')
const AgendaController = require('../controllers/AgendaController')

const router = Router()

router.delete('/agendas/:id', AgendaController.delete)
router.post('/agendas', AgendaController.insert)

module.exports = router
