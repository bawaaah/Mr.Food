const Category = require('../models/category')

const addCategory = async (req,res) => {
    const category = new Category({
        name: req.body.name,
        description: req.body.description,
        photo: req.body.photo
    })
    try {
        res.status(201).json({message: "Added"})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getCategory = async(req,res) =>{
    const {name} = req.params
    try {
        const details = await Category.findOne({name: name})
        if(details == null) res.json({massage: "NULL"})
        else res.json(details)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllCategory = async(req,res) => {
    try {
        const allCategory = await Category.find()
        if (allCategory == null) res.json({massage: "NULL"})
        else res.json(allCategory)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateCategory = async (req,res) => {
    const name = req.params.name
    const data = req.body
    try {
        const details = await Category.findOneAndUpdate({name: name},data)
        if (details == null) res.json({ message: "Category name not available"})
        else res.json(details)
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }
}

const deleteCategory = async (req,res) => {
    const name = req.params.name
    try {
        const details = await Category.findOneAndDelete({name: name})
        if (details == null) res.json({ message: "Category name not available"})
        else res.json(details)
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }
}

module.exports = {addCategory,getCategory,getAllCategory,updateCategory,deleteCategory}