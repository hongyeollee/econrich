const { appDataSource } = require('./index');

const increSalary = async (departmentId, increPercent) => {
  try {
    await appDataSource.query(
      `
    UPDATE
      employees e
    JOIN
      departments d
    ON
      e.department_id = d.department_id
    JOIN
      jobs j
    ON
      e.job_id = j.job_id
    SET
      e.salary = CASE
    WHEN
      e.salary + e.salary * ? < j.min_salary THEN NULL
    WHEN
      e.salary + e.salary * ? > j.max_salary THEN NULL
    ELSE
      e.salary + e.salary * ?
    END
    WHERE
      d.department_id =?
    `,
      [increPercent, increPercent, increPercent, departmentId]
    );
  } catch (error) {
    if (error.message.includes("Column 'salary' cannot be null")) {
      const error = new Error('INVALID_INCRE_PERCENT_SALARY');
      error.statusCode = 400;
      throw error;
    } else {
      throw error;
    }
  }
};
const checkExistDepartment = async (departmentId) => {
  const [result] = await appDataSource.query(
    `
    SELECT EXISTS(
      SELECT
        department_id
      FROM
        departments
      WHERE
        department_id=?
    )as checkExistDepartment
    `,
    [departmentId]
  );
  return !!parseInt(result.checkExistDepartment);
};

module.exports = { increSalary, checkExistDepartment };
