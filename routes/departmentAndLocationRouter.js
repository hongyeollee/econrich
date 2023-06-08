const router = require('express').Router();

const departmentAndLocationController = require('../controllers/departmentAndLocationController');

router.get(
  '/departmentandlocation',
  departmentAndLocationController.getInfoAll
);
router.get(
  '/departmentandlocation/:locationId',
  departmentAndLocationController.getInfo
);
router.get('/department', departmentAndLocationController.getDepartmentAll);
router.get(
  '/department/:departmentId',
  departmentAndLocationController.getDepartment
);
router.get(`/location`, departmentAndLocationController.getLocationAll);
router.get(
  '/location/:locationId',
  departmentAndLocationController.getLocation
);
module.exports = { router };
