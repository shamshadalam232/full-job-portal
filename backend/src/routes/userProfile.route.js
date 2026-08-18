const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const { userProfileId, updateProfile } = require('../controllers/userProfile.controller')
const upload = require('../middlewares/upload')


const userProfile = express.Router()

userProfile.get('/profile',authMiddleware, userProfileId)
userProfile.patch('/profile',authMiddleware,upload.single('profilePhoto'), updateProfile)

module.exports = userProfile