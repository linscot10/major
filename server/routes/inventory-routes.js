const express = require("express")
const authMiddleware = require("../middlewares/auth-middleware")
const { createInventoryController, getInventoryController, getDonors, getHospitalController, getOrganisationController, getOrganisationForHospitalController } = require("../controllers/inventory-controller")
const router = express.Router()

router.post('/create-inventory', authMiddleware, createInventoryController)
router.get('/get-inventory', authMiddleware, getInventoryController)
router.get('/get-donors', authMiddleware, getDonors)
router.get('/get-hospitals', authMiddleware, getHospitalController)
router.get('/get-organisations', authMiddleware, getOrganisationController)
router.get('/get-organisations-for-hospital', authMiddleware, getOrganisationForHospitalController)


module.exports = router