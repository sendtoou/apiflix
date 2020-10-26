const router = require('express').Router();
const celebController = require('../controllers/celeb.controller');
// const { bodyView } = require('../controllers/celeb.controller');

router.route('/celeb')
.get(celebController.getAll)
.post(celebController.create)

router.route('/celeb/:celebId')
.get(celebController.getById)

module.exports = router