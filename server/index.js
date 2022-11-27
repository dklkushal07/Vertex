const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

const User = require('./models/user.model')
const Stock = require("./models/stock.model")

app.use(cors())

//------------------CHANGE THE URL
try{
    mongoose.connect('mongodb://localhost:27017/vertexDB')
}catch(error){

}


app.listen(1337,()=>{
    console.log('Server started on 1337')
}
)

app.use(express.json())
// --------------------------------------AUTH------------------------------------
app.post('/api/register',async(req, res) => {
    console.log(req.body)
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            address: req.body.address,
            contact: req.body.contact,
            role: req.body.role,
        })
        return res.json({status: "ok",user:user})
    } catch (error) {
        res.json({status: "error"})
        
    }

})

app.post('/api/login',async(req, res) => {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
            role: req.body.role,
        })
        if(user){
            return res.json({status:"ok",user: user})
        }
        else{
            return res.json({status: 'error', user:false})
        }
})

//-------------------------------------Stock----------------------------------------

app.post('/api/upload/stock',async (req,res) => {
    const {weightStore,weightSell,farmer} = req.body;
    const stock = await Stock.create({
        weightSell:weightSell,
        weightStore:weightStore,
        farmer:farmer
    });

    if(stock){
        return res.json({
            message:"Stock added successfully"
        })
    }

    return res.json({
        message:"Error in stock addition"
    })

})

//------------------------------------Order-------------------------------------------------
app.post("/api/upload/orders",async (req,res) => {
    const {itemSize,orderedBy} = req.body
    const order = await Order.create(req.body);
    if(order){
        return res.json({
            message:"Order created successfully",
            order:order
        })
    }
    return res.json({
        message:"Order creation failed",
        order:false
    })
})
app.get("/api/get/orders",async (req,res) => {
    const order = await Order.find({});
    if(order){
        return res.json({
            message:"Your orders are",
            order:order
        })
    }
    return res.json({
        message:"Empty order list.",
        order:false
    })
})
