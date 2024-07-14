const Category = require('../models/category')

const fs = require('fs')
const path = require('path')

const addCategory = async (req,res) => {
    const data = fs.readFileSync(req.file.path)

    const category = new Category({
        name: req.body.name,
        description: req.body.description,
        photo: {
            data: data,
            contentType: req.file.mimetype
        }
    })
    try {
        await category.save()
        fs.unlinkSync(req.file.path)
        res.status(201).json({message: "Added"})
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ message: "Category already exists" })
        } else {
            res.status(400).json({ message: error.message })
        }
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