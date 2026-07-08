const express = require('express')
const regusterRoute = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const userProfile = require('./routes/userProfile.route')
const companyRoute = require('./routes/companyRoute')

const app = express()
app.use(express.json())
app.use(cookieParser())

// login,logout,register api
app.use('/api/auth', regusterRoute)
//User profile,
app.use('/api/users', userProfile)
//Company route
app.use('/api/users/', companyRoute)



module.exports = app;