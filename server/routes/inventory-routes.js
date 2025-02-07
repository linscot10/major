const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const { createInventoryController,getInventoryController } = require("../controllers/inventory-controller")
const router = express.Router()

router.post('/create-inventory', authMiddleware, createInventoryController)
router.get('/get-inventory', authMiddleware, getInventoryController)


module.exports = router