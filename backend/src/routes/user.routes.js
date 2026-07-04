const express = require('express')
const {register, login} = require("../controllers/user.controller")
const regusterRoute = express.Router()

regusterRoute.post('/register', register)
regusterRoute.post('/login', login)


module.exports = regusterRoute