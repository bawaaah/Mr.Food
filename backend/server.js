const express = require('express')
const app = express()
const connectDB = require('./config/db')


connectDB()

const port = 3000

//setup app port
app.listen(port, () => console.log(`App listening to the port ${port}`))