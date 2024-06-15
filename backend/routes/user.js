const express = require('express')
const router = express.Router()
const {addUser,getUser} =  require('../controllers/user')


router.post('/add',addUser)
router.get('/get/:name',getUser)




module.exports = router