const mongoose = require('mongoose')
require('dotenv').config()

const URL = process.env.MONGO_URL


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