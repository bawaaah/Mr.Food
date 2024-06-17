const mongoose = require('mongoose')

const Item = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: [true, "Item already exist"]
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
    }
})

const item = mongoose.model('Item',Item)

module.exports = item