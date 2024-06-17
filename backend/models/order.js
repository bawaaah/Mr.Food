const mongoose = require('mongoose')


const Order = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, "Order already exist"]
    },
    qty: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})



const order = mongoose.model('Order', Order)

module.exports = order