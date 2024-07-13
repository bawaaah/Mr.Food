const express = require('express')
const router = express.Router()
const multer =  require('multer')
const {addCategory,getCategory,getAllCategory,updateCategory,deleteCategory} = require('../controllers/category')

const upload = multer({dest: 'uploads/'})

//category CRUD
router.post('/add',upload.single('photo'),addCategory)
router.get('/get/:name',getCategory)
router.get('/getAll',getAllCategory)
router.delete('/delete/:name',deleteCategory)
router.put('/update/:name',updateCategory)

module.exports = router