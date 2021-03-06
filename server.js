require('dotenv').config()

const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')
const flash = require('connect-flash')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const passport = require('passport')
const passportConfig = require('./services/auth')
const adminRouter = require('./routers/adminRouter.js')
const storeRouter = require('./routers/storeRouter')
const userRouter = require('./routers/userRouter')
const methodOverride = require('method-override')
const path = require('path')
const bodyParser = require('body-parser')

// environment port
const port = process.env.PORT || 3000

require('./DB')

// will store session information as a 'sessions' collection in Mongo
const store = new MongoDBStore({
  uri: process.env.MONGODB_URI,
  collection: 'sessions'
})

// middleware
app.use(express.static(__dirname + '/public'))
app.use(logger('dev')) // log incoming requests to terminal
app.use(cookieParser()) // interpret cookies that are attached to requests
app.use(express.urlencoded({ extended: true })) // interpret standard form data in requests
app.use(flash()) // set and reset flash messages
app.use(methodOverride('_method'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ejs configuration
app.set('view engine', 'ejs')
app.use(ejsLayouts)

app.use(session({
  secret: 'boomsauce',
  cookie: { maxAge: 600000000 },
  resave: true,
  saveUninitialized: false,
  store
}))

app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
  app.locals.currentUser = req.user
  app.locals.loggedIn = !!req.user
  next()
})

// root route
app.get('/', (req, res) => {
  res.render('index')
})
app.use('/admin', adminRouter)
app.use('/store', storeRouter)
app.use('/', userRouter)

app.listen(port, (err) => {
  console.log(err || 'Server running on port ' + port)
})
