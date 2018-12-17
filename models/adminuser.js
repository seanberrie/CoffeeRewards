const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

adminSchema.pre('save', function (next) {
  const admin = this
  if (!admin.isModified('password')) return next()
  bcrypt.genSalt(8, (err, salt) => {
    if (err) return next(err)
    bcrypt.hash(admin.password, salt, null, (err, hash) => {
      if (err) return next(err)
      admin.password = hash
      next()
    })
  })
})

adminSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

const Admin = mongoose.model('Admin', adminSchema)
module.exports = Admin
