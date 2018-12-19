const express = require('express')
const userRouter = new express.Router()
const passport = require('passport')
const Store = require('../controllers/store')

userRouter.get('/signup', (req, res) => {
  res.render('signup')
})

userRouter.get('/coffeerewards', Store.index2, (req, res) => {
  res.render('coffeerewards')
})

module.exports = userRouter
