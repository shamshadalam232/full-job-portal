const express = require('express')
const {register, login, logOut, deleteAccount} = require("../controllers/user.controller")
const authMiddleware = require('../middlewares/auth.middleware')
const { deleteJob } = require('../controllers/jobController')
const regusterRoute = express.Router()

regusterRoute.post('/register', register)
regusterRoute.post('/login', login)
regusterRoute.post('/logout', logOut)



module.exports = regusterRoute