const mongoose = require('mongoose')

const schema = mongoose.Schema()

const user = new schema(
    {
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
    }
)

const User = mongoose.model('User', user)

module.exports = User