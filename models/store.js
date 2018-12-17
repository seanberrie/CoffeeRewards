const mongoose = require('mongoose')

const storeSchema = new mongoose.Schema({
  storename: String,
  address: String,
  phonenumber: String,
  prizecode: String
})
const Store = mongoose.model('Store', storeSchema)
module.exports = Store
