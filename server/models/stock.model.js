const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const stockModel = new mongoose.Schema({
    weightSell:{
        type:Number,
        required:true
    },
    farmer:{
        type: ObjectId,
        ref:"UserData"
    },
    weightStore:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Stock",stockModel);