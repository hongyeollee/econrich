const { appDataSource } = require('./index');

const getEmployeeInfoByEmpolyeeId = async (employeeId) => {
  const result = await appDataSource.query(
    `
  SELECT
    d.employee_id,
    d.job_id,
    d.manager_id,
    d.department_id,
    d.location_id,
    d.country_id,
    d.first_name,
    d.last_name,
    d.salary,
    d.commission_pct,
    d.department_name,
    d.job_title,
    d.city,
    d.state_province,
    d.country_name,
    d.region_name,
    e.email,
    e.phone_number,
    e.hire_date
  FROM
    emp_details_view d
  JOIN
    employees e
  ON
    d.employee_id=e.employee_id
  WHERE
    e.employee_id=?
    `,
    [employeeId]
  );
  return result;
};

const checkExistEmployeeByEmpolyeeId = async (employeeId) => {
  const [result] = await appDataSource.query(
    `
    SELECT EXISTS(
      SELECT
        employee_id
      FROM
        employees
      WHERE
        employee_id=?
    ) as checkExistEmployee
    `,
    [employeeId]
  );
  return !!parseInt(result.checkExistEmployee);
};

const getHistoryEmployeeInfoByEmpolyeeId = async (employeeId) => {
  const result = await appDataSource.query(
    `
    SELECT
      jh.*,
      e.first_name,
      e.last_name
    FROM
      job_history jh
    JOIN
      employees e
    ON
      e.employee_id=jh.employee_id
    WHERE
      jh.employee_id=?
    `,
    [employeeId]
  );
  return result;
};

const checkExistHistoryEmployeeByEmpolyeeId = async (employeeId) => {
  const [result] = await appDataSource.query(
    `
    SELECT EXISTS(
      SELECT
        employee_id
      FROM
        job_history
      WHERE
        employee_id=?
    )as checkExistHistoryEmployee
    `,
    [employeeId]
  );
  return !!parseInt(result.checkExistHistoryEmployee);
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
  await appDataSource.query(
    `
    UPDATE
     employees
    SET
      first_name=?,
      last_name=?,
      email=?,
      phone_number=?,
      hire_date=?,
      job_id=?,
      salary=?,
      commission_pct=?,
      manager_id=?,
      department_id=?
    WHERE
      employee_id=?;
    `,
    [
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
      employeeId,
    ]
  );
};

module.exports = {
  getEmployeeInfoByEmpolyeeId,
  checkExistEmployeeByEmpolyeeId,
  getHistoryEmployeeInfoByEmpolyeeId,
  checkExistHistoryEmployeeByEmpolyeeId,
  updateEmployeeInfoByEmployeeId,
};
