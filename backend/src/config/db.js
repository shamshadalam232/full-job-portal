
const mongoose = require('mongoose')

const connectDb = async (req, res) => {
    mongoose.connect(process.env.MONGO_URI)
    console.log("Database connected")
}

module.exports = connectDb