const mongoose = require('mongoose')


const Feedback = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: [true, "E-mail already exist"]
    },
    description: {
        type: String,
        required: true
    }
})



const feedback = mongoose.model('Feedback', Feedback)

module.exports = feedback