const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/roleMiddleware');
const { jobCreate, getMyJob, getOneJob, getOneJobUpdate, deleteJob } = require('../controllers/jobController');

const jobRoute = express.Router()

jobRoute.post("/create-job", authMiddleware, roleMiddleware, jobCreate)
jobRoute.get('/get-job', authMiddleware, roleMiddleware, getMyJob)
jobRoute.get('/get-job/:jobId', authMiddleware, roleMiddleware, getOneJob)
jobRoute.patch('/get-job/:jobId', authMiddleware, roleMiddleware, getOneJobUpdate)
jobRoute.delete('/get-job/:jobId', authMiddleware, roleMiddleware, deleteJob)


module.exports = jobRoute