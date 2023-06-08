const departmentAndLocationService = require('../services/departmentAndLocationService');
const { catchAsync } = require('../utils/error');

const getInfo = catchAsync(async (req, res) => {
  const { locationId } = req.params;

  const data = await departmentAndLocationService.getInfoBylocationId(
    locationId
  );
  return await res.status(200).json({ data });
});

const getInfoAll = catchAsync(async (req, res) => {
  const data = await departmentAndLocationService.getInfoAll();

  return await res.status(200).json({ data });
});

const getDepartment = catchAsync(async (req, res) => {
  const { departmentId } = req.params;

  const data = await departmentAndLocationService.getDepartmentById(
    departmentId
  );

  return await res.status(200).json({ data });
});

const getDepartmentAll = catchAsync(async (req, res) => {
  const data = await departmentAndLocationService.getDepartmentAll();

  return await res.status(200).json({ data });
});

const getLocation = catchAsync(async (req, res) => {
  const { locationId } = req.params;

  const data = await departmentAndLocationService.getLocationById(locationId);

  return await res.status(200).json({ data });
});

const getLocationAll = catchAsync(async (req, res) => {
  const data = await departmentAndLocationService.getLocationAll();

  return await res.status(200).json({ data });
});

module.exports = {
  getInfo,
  getInfoAll,
  getDepartment,
  getDepartmentAll,
  getLocation,
  getLocationAll,
};
