const Store = require('../models/store')

module.exports = {
  index: (req, res) => {
    Store.find({}, (err, stores) => {
      if (err) res.json({ success: false, err })
      res.render('adminDB', { success: true, stores })
    })
  },

  create: (req, res) => {
    Store.create(req.body, (err, newStore) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, newStore })
    })
  },

  show: (req, res) => {
    Store.findById(req.params.id, (err, Store) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, Store })
    })
  },
  update: (req, res) => {
    let { body, params } = req
    Store.findByIdAndUpdate(params.id, body, { new: true }, (err, updateStore) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, updateStore })
    })
  },
  destroy: (req, res) => {
    Store.findByIdAndDelete(req.params.id, (err, deleteStore) => {
      if (err) res.json({ success: false, err })
      res.json({ success: true, deleteStore })
    })
  } }
