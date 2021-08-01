const { Router } = require('express')
const SoloController = require('../controllers/SoloController')

const router = Router()

router.put('/solos/:id', SoloController.update)
router.post('/solos', SoloController.insert)

module.exports = router
