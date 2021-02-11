const mongoose = require('mongoose')

module.exports = mongoose.model('animals', mongoose.Schema({
    name: String,
    desc: String,
    file: String
    
}))
