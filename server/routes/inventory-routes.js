const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const { createInventoryController } = require("../controllers/inventory-controller")
const router = express.Router()

router.post('/create-inventory', authMiddleware, createInventoryController)


module.exports = router