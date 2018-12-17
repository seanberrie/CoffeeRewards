const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/adminuser')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  Admin.findById(id, (err, admin) => {
    done(err, admin)
  })
})

/// local signup action
passport.use('local-signup', new LocalStrategy({
  adminnameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  Admin.findOne({ email }, (err, admin) => {
    if (err) return done(err)
    if (admin) return done(null, false)

  Admin.create(req.body, (err, newadmin) => {
      if (err) return console.log(err)
      return done(null, newadmin, null)
    })
  })
}))
/// local login action
passport.use('local-login', new LocalStrategy({
  adminnameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  Admin.findOne({ email }, (err, admin) => {
    if (err) return done(err)
    if (!admin || !admin.validPassword(password)) return done(null, false)
    return done(null, admin)
  })
}))

module.exports = passport
