const express = require('express')
const Store = require('../controllers/store')
const router = express.Router()

router.get('/', Store.index)
router.post('/', Store.create)
router.get('/:id/edit', Store.edit)
router.put('/:id', Store.update)
router.delete('/:id', Store.destroy)
// router.post('/:id/rewards', Store.rewards)

module.exports = router
