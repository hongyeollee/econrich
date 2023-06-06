const employeeDao = require('../models/employeeDao');

const getEmployeeInfoByEmpolyeeId = async (employeeId) => {
  const checkExistEmployee = await employeeDao.checkExistEmployeeByEmpolyeeId(
    employeeId
  );

  if (!checkExistEmployee) {
    const error = new Error('NOT_EXIST_EMPLOYEE');
    error.statusCode = 400;
    throw error;
  }

  return await employeeDao.getEmployeeInfoByEmpolyeeId(employeeId);
};

const getHistoryEmployeeInfoByEmpolyeeId = async (employeeId) => {
  const checkExistHistoryEmployee =
    await employeeDao.checkExistHistoryEmployeeByEmpolyeeId(employeeId);

  if (!checkExistHistoryEmployee) {
    const error = new Error('NOT_EXIST_HISTORY_EMPLOYEE');
    error.statusCode = 400;
    throw error;
  }

  return await employeeDao.getHistoryEmployeeInfoByEmpolyeeId(employeeId);
};

const updateEmployeeInfoByEmployeeId = async (
  employeeId,
  firstName,
  lastName,
  email,
  phoneNumber,
  hireDate,
  jobId,
  salary,
  commissionPct,
  managerId,
  departmentId
) => {
  const checkExistEmployee = await employeeDao.checkExistEmployeeByEmpolyeeId(
    employeeId
  );

  if (!checkExistEmployee) {
    const error = new Error('NOT_EXIST_EMPLOYEE');
    error.statusCode = 400;
    throw error;
  }

  return await employeeDao.updateEmployeeInfoByEmployeeId(
    employeeId,
    firstName,
    lastName,
    email,
    phoneNumber,
    hireDate,
    jobId,
    salary,
    commissionPct,
    managerId,
    departmentId
  );
};

module.exports = {
  getEmployeeInfoByEmpolyeeId,
  getHistoryEmployeeInfoByEmpolyeeId,
  updateEmployeeInfoByEmployeeId,
};
