const express = require('express')
const regusterRoute = require('./routes/user.routes')
const cookieParser = require('cookie-parser')
const userProfile = require('./routes/userProfile.route')
const companyRoute = require('./routes/companyRoute')
const jobRoute = require('./routes/jobRoute')
const userAllJobRoute = require('./routes/userAllJobRoute')
const applicationRoute = require('./routes/application.rout')

const app = express()
app.use(express.json())
app.use(cookieParser())

// login,logout,register api
app.use('/api/auth', regusterRoute)
//User profile,
app.use('/api/users', userProfile)
//Company route
app.use('/api/users', companyRoute)
//Job route
app.use('/api/users', jobRoute)
//user all job api
app.use('/api/users', userAllJobRoute)
//user application api
app.use('/api/users', applicationRoute)



module.exports = app;