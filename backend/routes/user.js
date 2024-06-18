const express = require('express')
const router = express.Router()
const {addUser,getUser,getAllUser,deleteUser,updateUser,login} =  require('../controllers/user')
const auth = require('../middleware/auth')

//userCRUD
router.post('/add',addUser)
router.get('/get/:name',getUser)
router.get('/getAll',getAllUser)
router.delete('/delete/:name', auth, deleteUser)
router.put('/update/:name',updateUser)
router.get('/login',login)


module.exports = router