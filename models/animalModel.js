const mongoose = require('mongoose')

module.exports = mongoose.model(mongoose.Schema({
    name: String,
    desc: String
}))