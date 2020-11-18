const router = require('express').Router();
const genreController = require('../controllers/genre.controller');
// const { bodyView } = require('../controllers/celeb.controller');

router.route('/genre')
.get(genreController.getAll)
.post(genreController.create)

router.route('/genre/:genreId')
.get(genreController.getById)



module.exports = router