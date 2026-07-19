const express = require('express');
const { getAllJobs, getSingleJob, applyJob } = require('../controllers/userAllJob');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware2 = require('../middlewares/roleMiddleware2');

const userAllJobRoute = express.Router();

userAllJobRoute.get('/alljob', getAllJobs)
userAllJobRoute.get('/alljob/:id', getSingleJob)
userAllJobRoute.post('/alljob/:id', authMiddleware, roleMiddleware2, applyJob)

module.exports = userAllJobRoute