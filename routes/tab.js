const express = require('express');
const router = express.Router();
const tabController = require('../controllers/tab.controller');
const { verifyToken } = require('../controllers/auth.controller');

router.route('/tab')
// .get(verifyToken, tabController.getAllTab)
.get(tabController.getAllTab)
.post(tabController.createTab)

router.route('/tab/:tabId/series')
.get(tabController.getTabWithSerie)
.post(tabController.addSerieToTab)

module.exports = router