const Store = require('../models/store')
const User = require('../models/user')

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

  edit: (req, res) => {
    Store.findById(req.params.id, (err, store) => {
      if (err) res.json({ success: false, err })
      res.render('edit', store)
    })
  },

  // rewards: (req, res) => {
  //   Store.findById(req.params.id, (err, user) => {
  //     if (err) res.json({ success: false, err })
  //     if (req.params.id == User.type.Schema.user.points)

  //       res.redirect('/coffeerewards')
  //   })
  // },

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
