const express = require('express')
const app = express()
const connectDB = require('./config/db')
require('dotenv').config()

//connect to database
connectDB()


const port = process.env.PORT
//setup app port
app.listen(port, () => console.log(`App listening to the port ${port}`))