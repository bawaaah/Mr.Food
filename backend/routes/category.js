const express = require('express')
const router = express.Router()
const {addCategory,getCategory,getAllCategory,updateCategory,deleteCategory} = require('../controllers/category')

//category CRUD
router.post('/add',addCategory)
router.get('/get/:name',getCategory)
router.get('/getAll',getAllCategory)
router.delete('/delete/:name',deleteCategory)
router.put('/update/:name',updateCategory)

module.exports = router