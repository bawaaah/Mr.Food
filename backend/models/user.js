const mongoose = require('mongoose')


const User = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a unique name"],
        unique: [true, "Already exist"]
    },

    password: {
        type: String,
        required: [true, "Enter a password"]
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: Number,
        required: true
    }
})
    


const user = mongoose.model('User', User)

module.exports = user