const User = require('../models/user')


const addUser = async (req,res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
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
        const details = await User.findOne({username:name})
        if(details == null) res.json({massage: "NULL"})
        else res.json(details)
        
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {addUser,getUser}