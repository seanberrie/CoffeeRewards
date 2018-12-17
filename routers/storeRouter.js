const express = require('express')
const Store = require('../controllers/store')
const router = express.Router()

router.get('/', Store.index)
router.get('/:id', Store.show)
router.post('/', Store.create)
router.patch('/:id', Store.update)
router.delete('/:id', Store.destroy)
module.exports = router