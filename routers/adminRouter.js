const express = require('express')
const adminRouter = new express.Router()
const passport = require('passport')
const Store = require('../controllers/store')

adminRouter.get('/', (req, res) => {
  res.render('admin')
})

adminRouter.get('/asignup', (req, res) => {
  res.render('asignup')
})

adminRouter.get('/store/:id/edit', isLoggedIn, (req, res) => {
  res.render('edit')
})

adminRouter.post('/login', passport.authenticate('local-login', {
  successRedirect: '/admin/Coffeerewardeditor',
  failureRedirect: '/admin'
}))

adminRouter.post('/', passport.authenticate('local-admin-signup', {
  successRedirect: '/admin/Coffeerewardeditor',
  failureRedirect: '/admin/asignup'
}))

adminRouter.get('/Coffeerewardeditor', isLoggedIn, Store.index, (req, res) => {
  // / render the admin profile (only when user is logged in)
  res.render('Coffeerewardeditor')
})
/// ///
// usersRouter.patch('/profile', isLoggedIn, (req, res) => {
//   if (!req.body.password) delete req.body.password
//   Object.assign(req.user, req.body)
//   req.user.save((err, updatedUser) => {
//     if (err) console.log(err)
//     res.redirect('/users/profile')
//   })
// })
/// ///

adminRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
/// destroy the session,and redirect the user back to the home page.
})

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/admin')
}

module.exports = adminRouter
