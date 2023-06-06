const departmentAndLocationDao = require('../models/departmentAndLocationDao');

const getInfoBylocationId = async (locationId) => {
  const checkExistLocation =
    await departmentAndLocationDao.checkExistLocationIdBylocationId(locationId);

  if (!checkExistLocation) {
    const error = new Error('NOT_EXIST_LOCATION');
    error.statusCode = 400;
    throw error;
  }
  return await departmentAndLocationDao.getInfoBylocationId(locationId);
};

const getInfoAll = async () => {
  return departmentAndLocationDao.getInfoBylocationId();
};

const getDepartmentById = async (departmentId) => {
  const checkExistDepartment =
    await departmentAndLocationDao.checkExistDepartmentByid(departmentId);

  if (!checkExistDepartment) {
    const error = new Error('NOT_EXIST_DEPARTMENT');
    error.statusCode = 400;
    throw error;
  }
  return await departmentAndLocationDao.getDepartmentById(departmentId);
};

const getDepartmentAll = async () => {
  return departmentAndLocationDao.getDepartmentById();
};

const getLocationById = async (locationId) => {
  const checkExistLocation =
    await departmentAndLocationDao.checkExistLocationIdBylocationId(locationId);

  if (!checkExistLocation) {
    const error = new Error('NOT_EXIST_LOCATION');
    error.statusCode = 400;
    throw error;
  }
  return await departmentAndLocationDao.getLocationById(locationId);
};

const getLocationAll = async () => {
  return departmentAndLocationDao.getLocationById();
};

module.exports = {
  getInfoBylocationId,
  getInfoAll,
  getDepartmentById,
  getDepartmentAll,
  getLocationById,
  getLocationAll,
};
