const mongoose = require('mongoose')

const URL = "mongodb+srv://user:1234@cluster0.1o1nvgf.mongodb.net/"


const connectDB = async () => {
    try{
        mongoose.connect(URL)
        const connection = mongoose.connection
        connection.once("open", () => console.log("MongoDB connection is successful"))
    }
    catch(error){
        console.error('MongoDB connection failed: ', error.message)
    }
}

module.exports = connectDB