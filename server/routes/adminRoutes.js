const express = require('express');
const authMiddleware = require('../middlewares/auth-middleware');
const { getDonorsListController } = require('../controllers/admin-controller');
const adminMiddleware = require('../middlewares/adminMiddleware');

const router = express.Router();

router.get('/donor-list', authMiddleware, adminMiddleware, getDonorsListController)

module.exports = router