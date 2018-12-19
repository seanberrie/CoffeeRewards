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
passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, (req, email, password, done) => {
  User.findOne({ email }, (err, user) => {
    if (err) return done(err)
    if (user) return done(null, false)
    // if (req.body.code === "ABCDE") {
    // delete req.body.code
    // let newUser = new User({...req.body, user:: true})
    // newUser.save(err => {
    // if (err) res.json({  })
    // If success...
    // })
    // };
    User.create(req.body, (err, newuser) => {
      if (err) return console.log(err)
      return done(null, newuser, null)
    })
  })
}))
/// local login action
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
