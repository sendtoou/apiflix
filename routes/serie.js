const express = require('express');
const router = express.Router();

const serieController = require('../controllers/serie.controller')
const { bodyView } = require('../controllers/serie.controller');

router.route('/serie')
.get(serieController.allSerie)
.post(bodyView, serieController.createSerie)

// router.route('/:userId/packages')
// .get(userController.getUserPackages)
// .post(userController.newUserPackage);

router.route('/serie/:serieId')
.get(serieController.getById)

module.exports = router