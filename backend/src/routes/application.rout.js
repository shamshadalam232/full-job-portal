const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware')
const roleMiddleware = require('../middlewares/roleMiddleware')
const roleMiddleware2 = require('../middlewares/roleMiddleware2')
const { getMyAppliedJobs, getRecruiterjob, applicationStatusUpdate } = require('../controllers/application.controller')

const applicationRoute = express.Router()

applicationRoute.get('/user-application', authMiddleware, roleMiddleware2, getMyAppliedJobs)
applicationRoute.get('/user-application/recruiter', authMiddleware, roleMiddleware, getRecruiterjob)
applicationRoute.patch('/user-application/:id', authMiddleware, roleMiddleware, applicationStatusUpdate)

module.exports = applicationRoute