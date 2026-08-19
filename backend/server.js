require('dotenv').config()
const app = require('./src/app')
const PORT = process.env.PORT || 3000
const connectDb = require('./src/config/db')
connectDb()


app.listen(PORT, () => {
    console.log("server is running 3000")
})

