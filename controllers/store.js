const Store = require('../models/store')

module.exports = {
  // ADMIN & USER
  index: (req, res) => {
    Store.find({}, (err, stores) => {
      if (err) res.json({ success: false, err })
      res.render('Coffeerewardeditor', { success: true, stores })
    })
  },
  index2: (req, res) => {
    Store.find({}, (err, stores) => {
      if (err) res.json({ success: false, err })
      res.render('coffeerewards', { success: true, stores })
    })
  },

  // ADMIN ONLY
  create: (req, res) => {
    Store.create(req.body, (err, newStore) => {
      if (err) res.json({ success: false, err })
      res.redirect('/admin/Coffeerewardeditor')
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
    Store.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateStore) => {
      if (err) res.json({ success: false, err })
      res.redirect('/admin/Coffeerewardeditor')
    })
  },
  // ADmin
  destroy: (req, res) => {
    Store.findByIdAndRemove(req.params.id, (err, deletestore) => {
      if (err) res.json({ success: false, err })
      res.redirect('/admin/Coffeerewardeditor')
    })
  }
}
