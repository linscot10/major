const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getDonorsListController, getHospitalListController, getOrganisationListController, deleteDonorController } = require('../controllers/admin-controller');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.get('/donor-list', authMiddleware, adminMiddleware, getDonorsListController)
router.get('/hospital-list', authMiddleware, adminMiddleware, getHospitalListController)
router.get('/org-list', authMiddleware, adminMiddleware, getOrganisationListController)
router.delete('/delete-donor/:id', authMiddleware, adminMiddleware, deleteDonorController)

module.exports = router