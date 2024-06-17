const Item = require('../models/item')

const addItem = async (req,res) => {
    const user = new Item({
        name: req.body.name,
        photo: req.body.photo,
        price: req.body.price,
        category: req.body.category
    })

    try {
        await Item.save()
        res.status(201).json({message: "Item Added"})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getItem = async(req,res) =>{
    const {name} = req.params
    try {
        const details = await Item.findOne({name: name})
        if(details == null) res.json({massage: "NULL"})
        else res.json(details)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllItem = async(req,res) => {
    try {
        const allItem = await Item.find()
        if (allItem == null) res.json({massage: "NULL"})
        else res.json(allItem)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateItem = async (req,res) => {
    const name = req.params.name
    const data = req.body
    try {
        const details = await Item.findOneAndUpdate({name: name},data)
        if (details == null) res.json({ message: "Item name not available"})
        else res.json(details)
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }
}

const deleteItem = async (req,res) => {
    const name = req.params.name
    try {
        const details = await Item.findOneAndDelete({name: name})
        if (details == null) res.json({ message: "Item name not available"})
        else res.json(details)
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }
}

module.exports = {addItem,getItem,getAllItem,updateItem,deleteItem}