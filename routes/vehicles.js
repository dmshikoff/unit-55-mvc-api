const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/vehicles')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:id', ctrl.getOne)

module.exports = router