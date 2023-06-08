const router = require('express').Router();

const salaryController = require('../controllers/salaryController');

router.patch('/incresalary', salaryController.increSalary);

module.exports = { router };
