const express = require('express')
const router = express.Router()
const {addItem,getItem,getAllItem,updateItem,deleteItem} = require('../controllers/item')

//item CRUD
router.post('/add',addItem)
router.get('/get/:name',getItem)
router.get('/getAll',getAllItem)
router.delete('/delete/:name',updateItem)
router.put('/update/:name',deleteItem)

module.exports = router