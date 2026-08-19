const express = require('express')
const searchProduct = require('../controllers/searchjob')

const search = express.Router()

search.get('/search', searchProduct)

module.exports = search