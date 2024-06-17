const express = require('express')
const router = express.Router()
const {addUser,getUser,getAllUser,deleteUser,updateUser} =  require('../controllers/user')

//userCRUD
router.post('/add',addUser)
router.get('/get/:name',getUser)
router.get('/getAll',getAllUser)
router.delete('/delete/:name',deleteUser)
router.delete('/update/:name',updateUser)


module.exports = router