const salaryDao = require('../models/salaryDao');

const increSalary = async (departmentId, increPercent) => {
  const checkExistDepartment = await salaryDao.checkExistDepartment(
    departmentId
  );

  if (!checkExistDepartment) {
    const error = new Error('NOT_EXIST_DEPARTMENT');
    error.statusCode = 400;
    throw error;
  }

  if (typeof increPercent !== 'number') {
    const error = new Error('INVALID_INCRE_PERCENT_TYPE');
    error.statusCode = 400;
    throw error;
  }
  return await salaryDao.increSalary(departmentId, increPercent);
};

module.exports = { increSalary };
