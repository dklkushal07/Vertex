const mongoose = require('mongoose')

const Stock = new mongoose.Schema({
    productID: {type: Integer, required: true, unique: true},
    weightInKG: {type: Integer, required: true},
    seller: {type: String},
    buyer:{}
})