const mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category name is required!!!"],
        unique: [true, "Already exist"]
    },
    description:{
        type: String,
        required: [true, "Category description is required!!!"]
    },
    photo: {
        data: Buffer,
        contentType: String
    }
})


const category = mongoose.model('Category',Category)

module.exports = category