const express = require('express');
const router = express.Router();

const serieController = require('../controllers/serie.controller')
const { bodyView } = require('../controllers/serie.controller');

router.route('/serie')
.get(serieController.getAll)
.post(bodyView, serieController.create)
// .post(serieController.create)

// router.route('/:userId/packages')
// .get(userController.getUserPackages)
// .post(userController.newUserPackage);

router.route('/serie/:serieId')
.get(serieController.getById)

router.route('/serie/:serieId/genre')
.get(serieController.getGenreOfSerie)
.post(serieController.addGenreToSerie)

module.exports = router