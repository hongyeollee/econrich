const salaryService = require('../services/salaryService');
const { catchAsync } = require('../utils/error');

const increSalary = catchAsync(async (req, res) => {
  const { departmentId, increPercent } = req.body;

  if (!departmentId) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;
    throw error;
  }
  await salaryService.increSalary(departmentId, increPercent);

  return await res.status(200).json({
    message: `SEUCCESS_UPDATE_INCREASE_EMPLOYEE_DEPARTMENT_ID_${departmentId}_AND_INCRE_PERCENT_${increPercent}`,
  });
});

module.exports = { increSalary };
