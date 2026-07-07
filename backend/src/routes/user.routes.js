const express = require('express')
const {register, login, logOut, deleteAccount} = require("../controllers/user.controller")
const authMiddleware = require('../middlewares/auth.middleware')
const regusterRoute = express.Router()

regusterRoute.post('/register', register)
regusterRoute.post('/login', login)
regusterRoute.post('/logout', logOut)
regusterRoute.delete('/delete', authMiddleware, deleteAccount)


module.exports = regusterRoute