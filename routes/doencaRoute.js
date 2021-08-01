const { Router } = require('express')
const DoencaController = require('../controllers/DoencaController')

const router = Router()

router.get('/doencas/:id', DoencaController.findById)
router.post('/doencas', DoencaController.insert)

module.exports = router
