const { Router } = require('express')
const PlantaController = require('../controllers/PlantaController')

const router = Router()

router.get('/plantas', PlantaController.findAll)

module.exports = router
