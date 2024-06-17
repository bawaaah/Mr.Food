const User = require('../models/user')
const bcrypt = require('bcrypt')


const addUser = async (req,res) => {
    const password = req.body.password
    const hashPassword = await bcrypt.hash(password,10)
    const user = new User({
        username: req.body.username,
        password: hashPassword,
        email: req.body.email,
        phone: req.body.phone
    })

    try {
        await user.save()
        res.status(201).json({message: "Added"})
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getUser = async(req,res) =>{
    const {name} = req.params
    try {
        const details = await User.findOne({username: name})
        if(details == null) res.json({massage: "NULL"})
        else{
            res.json(details)
            // const pw = await bcrypt.compare("1234",details.password)
            // console.log(pw)
    }
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const getAllUser = async(req,res) => {
    try {
        const allUsers = await User.find()
        if (allUsers == null) res.json({massage: "NULL"})
        else res.json(allUsers)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const updateUser = async (req,res) => {
    const name = req.params.name
    const data = req.body
    try {
        const details = await User.findOneAndUpdate({username: name},data)
        if (details == null) res.json({ message: "Username not available"})
        else res.json(details)
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }
}

const deleteUser = async (req,res) => {
    const name = req.params.name
    try {
        const details = await User.findOneAndDelete({username: name})
        if (details == null) res.json({ message: "Username not available"})
        else res.json(details)
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }
}

module.exports = {addUser,getUser,getAllUser,updateUser,deleteUser}