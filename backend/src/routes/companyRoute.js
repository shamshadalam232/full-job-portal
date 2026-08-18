const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const {companyCreate, companyFind, updateCompany, deleteCompany} = require('../controllers/companyController')
const upload = require('../middlewares/upload')

const companyRoute = express.Router()

companyRoute.post('/create-company', authMiddleware, roleMiddleware, companyCreate)
companyRoute.get('/get-company', authMiddleware, roleMiddleware, companyFind)
companyRoute.patch('/update-company', authMiddleware, roleMiddleware,upload.single('companyLogo'), updateCompany)
companyRoute.delete('/delete-company', authMiddleware, roleMiddleware, deleteCompany)

module.exports = companyRoute