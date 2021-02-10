const mongoose = require('mongoose')
 
module.exports = mongoose.model("User", mongoose.Schema({
    username: {type: String, unique: true},
    password: String,
    email: {type: String, unique: true},
    isAdmin: Boolean
}))