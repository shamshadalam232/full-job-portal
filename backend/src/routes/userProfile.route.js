const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const { userProfileId, updateProfile } = require('../controllers/userProfile.controller')


const userProfile = express.Router()

userProfile.get('/profile',authMiddleware, userProfileId)
userProfile.patch('/profile',authMiddleware, updateProfile)

module.exports = userProfile