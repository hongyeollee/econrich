const router = require('express').Router();

const employeeController = require('../controllers/employeeController');

router.get('/:employeeId', employeeController.getEmployeeInfo);
router.get('/history/:employeeId', employeeController.getHistoryEmployeeInfo);
router.patch('/:employeeId', employeeController.updateEmployeeInfo);

module.exports = { router };
