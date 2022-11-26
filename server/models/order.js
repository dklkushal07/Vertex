const mongoose = require("mongoose")
const {ObjectId} = mongoose.Schema

const orderSchema = new mongoose.Schema({
    orderStatus:{
        type:"String",
        enum:["Ordered","On Way","Delivered"],
        default:"Ordered"
    },
    orderedBy:{
        type:ObjectId,
        ref:"UserData"
    },
    itemSize:{
        type:Number,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Order",orderSchema);