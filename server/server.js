const express = require("express");
require("dotenv").config()
const connectDB = require("./database/db")


const app = express()

app.use(express.json)

PORT = process.env.PORT || 4000
connectDB()

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})