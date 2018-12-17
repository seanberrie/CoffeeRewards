const express = require('express')
const adminRouter = new express.Router()
const passport = require('passport')

adminRouter.get('/admin', (req, res) => {
  res.render('admin')
})

adminRouter.get('/adminsignup', (req, res) => {
  res.render('adminsignup')
})

adminRouter.get('/adminDB', (req, res) => {
  res.render('adminDB')
})

adminRouter.post('/admin', passport.authenticate('local-login', {
  successRedirect: '/admindb',
  failureRedirect: '/admin'
}))

adminRouter.post('/adminsignup', passport.authenticate('local-signup', {
  successRedirect: '/admindb',
  failureRedirect: '/adminsignup'
}))

adminRouter.get('/admindb', isLoggedIn, ({ admin }, res) => {
  /// render the admin profile (only when user is logged in)
  res.render('admindb', { admin })
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

// adminRouter.get('/logout', (req, res) => {
//   req.logout()
//   res.redirect('/')
// /// destroy the session,and redirect the user back to the home page.
// })

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/admindb')
}

module.exports = adminRouter
