const jwt = require('jsonwebtoken')

const auth = (req,res,next) => {
    try {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        if(!token) return res.status(401).json({massage: "NO HEADER"}) //Unauthorized

        jwt.verify(token,process.env.JWT_SECRET, (err, user) => {
            if(err) return res.status(403) //Forbidden
            req.user = user
            next()
        })
    } catch (error) {
        res.status(400).json({ massage: error.message })
    }

}
module.exports = auth