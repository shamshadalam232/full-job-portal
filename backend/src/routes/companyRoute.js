const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const companyCreate = require('../controllers/companyController')

const companyRoute = express.Router()

companyRoute.post('/create-company', authMiddleware, roleMiddleware, companyCreate)

module.exports = companyRoute