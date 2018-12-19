const Store = require('../models/store')

module.exports = {
  // ADMIN & USER
  index: (req, res) => {
    Store.find({}, (err, stores) => {
      if (err) res.json({ success: false, err })
      res.render('adminDB', { success: true, stores })
    })
  },

  // ADMIN ONLY
  create: (req, res) => {
    Store.create(req.body, (err, newStore) => {
      if (err) res.json({ success: false, err })
      res.redirect('/admin/adminDB')
    })
  },
  // USER ONLY
  //   show: (req, res) => {
  //     Store.findById(req.params.id, (err, Store) => {
  //       if (err) res.json({ success: false, err })
  //       res.json({ success: true, Store })
  //     })
  //   },

  edit: (req, res) => {
    Store.findById(req.params.id, (err, store) => {
      if (err) res.json({ success: false, err })
      res.render('store/edit', store)
    })
  },

  // ADMIN ONLY
  update: (req, res) => {
    console.log('hit')
    Store.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateStore) => {
      if (err) res.json({ success: false, err })
      res.redirect('/admin/adminDB')
    })
  },
  // ADmin
  destroy: (req, res) => {
    Store.findByIdAndRemove(req.params.id, (err, deletestore) => {
      if (err) res.json({ success: false, err })
      res.redirect('/admin/adminDB')
    })
  }
}
