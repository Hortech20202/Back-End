const { Router } = require('express')
const PlantacaoController = require('../controllers/PlantacaoController')

const router = Router()

router.delete('/plantacoes/:id', PlantacaoController.delete)
router.post('/plantacoes', PlantacaoController.insert)

module.exports = router
