const router = require('express').Router();

const employeeRouter = require('./employeeRouter');
const departmentAndLocationRouter = require('./departmentAndLocationRouter');
const salaryRouter = require('./salaryRouter');
const boxofficeRotuer = require('./boxofficeRouter');

router.use('/employee', employeeRouter.router);
router.use('/partandlocation', departmentAndLocationRouter.router);
router.use('/salary', salaryRouter.router);
router.use('/movieboxoffice', boxofficeRotuer.router);

module.exports = router;
