const {storage} = require('../services/storage')
const multer = require('multer')
const upload = multer({storage})

module.exports = upload
