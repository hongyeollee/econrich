const employeeService = require('../services/employeeService');
const { catchAsync } = require('../utils/error');

const getEmployeeInfo = catchAsync(async (req, res) => {
  const { employeeId } = req.params;

  const data = await employeeService.getEmployeeInfoByEmpolyeeId(employeeId);
  return await res.status(200).json({ data });
});

const getHistoryEmployeeInfo = catchAsync(async (req, res) => {
  const { employeeId } = req.params;

  const data = await employeeService.getHistoryEmployeeInfoByEmpolyeeId(
    employeeId
  );
  return await res.status(200).json({ data });
});

const updateEmployeeInfo = catchAsync(async (req, res) => {
  const { employeeId } = req.params;
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    hireDate,
    jobId,
    salary,
    commissionPct,
    managerId,
    departmentId,
  } = req.body;

  if (!employeeId || !lastName || !email || !hireDate || !jobId || !salary) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }

  await employeeService.updateEmployeeInfoByEmployeeId(
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
  return await res
    .status(200)
    .json({ message: `SUCCESS_UPDATE_EMPLOYEE_ID_${employeeId}` });
});

module.exports = {
  getEmployeeInfo,
  getHistoryEmployeeInfo,
  updateEmployeeInfo,
};
