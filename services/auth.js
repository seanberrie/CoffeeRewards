const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

/// local signup action
passport.use('local-admin-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err)
    if (user) return done(null, false)
    if (req.body.code === process.env.ADMIN_CODE) {
      delete req.body.code
      User.create({ ...req.body, admin: true }, (err, newuser) => {
        if (err) return console.log(err)
        return done(null, newuser, null)
      })
    } else {
      if (err) return done({ message: "Code doesn't match." })
    }
  })
}))

/// local signup action
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err)
    if (user) return done(null, false)

    User.create(req.body, (err, newUser) => {
      if (err) return console.log(err)
      return done(null, newUser, null)
    })
  })
}))

passport.use('local-admin-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err)
    if (!user || !user.validPassword(password) || user.admin !== true) return done(null, false)
    return done(null, user)
  })
}))

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err)
    if (!user || !user.validPassword(password)) return done(null, false)
    return done(null, user)
  })
}))

module.exports = passport
