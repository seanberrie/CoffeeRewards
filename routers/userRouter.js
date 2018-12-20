const express = require('express')
const userRouter = new express.Router()
const passport = require('passport')
const Store = require('../controllers/store')

userRouter.get('/signup', (req, res) => {
  res.render('signup')
})

userRouter.post('/login', passport.authenticate('local-login', {
  successRedirect: '/Coffeerewards',
  failureRedirect: '/'
}))

userRouter.post('/', passport.authenticate('local-signup', {
  successRedirect: '/Coffeerewards',
  failureRedirect: '/'
}))

userRouter.get('/coffeerewards', isLoggedIn, Store.index2)

userRouter.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
/// destroy the session,and redirect the user back to the home page.
})

function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) return next()
  res.redirect('/')
}
module.exports = userRouter
