const express = require('express')
const app = express()
const connectDB = require('./config/db')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser') 

const user = require('./routes/user')
const category = require('./routes/category')
const item = require('./routes/item')

// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//connect to database
connectDB()

//routes
app.use('/user', user)
app.use('/category', category)
app.use('/item', item)

const port = process.env.PORT || 3000
//setup app port
app.listen(port, () => console.log(`App listening to the port ${port}`))