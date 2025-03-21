const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getDonorsListController, getHospitalListController, getOrganisationListController } = require('../controllers/admin-controller');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.get('/donor-list', authMiddleware, adminMiddleware, getDonorsListController)
router.get('/hospital-list', authMiddleware, adminMiddleware, getHospitalListController)
router.get('/org-list', authMiddleware, adminMiddleware, getOrganisationListController)

module.exports = router