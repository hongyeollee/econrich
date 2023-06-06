const router = require('express').Router();
const boxofficeController = require('../controllers/boxoffice.Controller');

router.get('/', boxofficeController.getMovieBoxoffice);

module.exports = { router };
