const mongoose = require('mongoose')
const mongoConnectionString = process.env.MONGODB_URI

// mongoose connection
mongoose.connect(mongoConnectionString, (err) => {
  console.log(err || 'Connected to MongoDB')
})

module.exports = mongoose
