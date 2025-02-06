const express = require("express");
const cors = require("cors")
const colors = require("colors")
const morgan = require("morgan")

require("dotenv").config()
const connectDB = require("./database/db")
const testRouter = require('./routes/test-route')
const authRoutes = require("./routes/auth-route")
const inventoryRoute = require("./routes/inventory-routes")
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

PORT = process.env.PORT || 4000
connectDB()

app.use("/api/", testRouter)
app.use("/api/auth", authRoutes)
app.use("/api/inventory", inventoryRoute)


app.listen(PORT, () => {
    console.log(`Server started in ${process.env.DEV_MODE}mode on port http://localhost:${PORT}`.bgBlue.white)
})