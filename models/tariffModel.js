const mongoose = require('mongoose')

module.exports = mongoose.model('Tariff', mongoose.Schema({
    name: String,
    price: Number
}))