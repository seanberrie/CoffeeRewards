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

module.exports = adminRouter
