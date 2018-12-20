const express = require('express')
const userRouter = new express.Router()
const passport = require('passport')
const Store = require('../controllers/store')
const User = require('../models/user')
const Rewards = require('../models/store')

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

userRouter.put('/coffeerewards', isLoggedIn, (req, res) => {
  let id = req.user._id
  console.log(req.body)
  User.findOne(id, (err, user) => {
    if (err) return console.log(err)
    if (req.body === Rewards) {
      user.points += 1
    }
  })
})

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
