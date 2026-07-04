const jwt = require('jsonwebtoken')
const user = require('../models/UserModel')

const authMiddleware = async(req, res, next) => {
   
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"you are not authorized"
        })
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY)

    req.user = decoded

    next()
}

module.exports = authMiddleware