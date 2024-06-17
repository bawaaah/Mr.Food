const express = require('express')
const app = express()
const connectDB = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const user = require('./routes/user')
const bodyParser = require('body-parser') 


// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//connect to database
connectDB()

//routes
app.use('/user',user)


const port = process.env.PORT || 3000
//setup app port
app.listen(port, () => console.log(`App listening to the port ${port}`))