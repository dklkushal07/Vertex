const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: String, required: true},
    role: {type: String, required: true},
},
{
    collection: 'user-data'
})

const userModel = mongoose.model('UserData', User)

module.exports = userModel