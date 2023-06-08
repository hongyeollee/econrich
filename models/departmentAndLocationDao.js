const { appDataSource } = require('./index');

const getInfoBylocationId = async (locationId) => {
  const whereClause = locationId ? `WHERE l.location_id=${locationId}` : ``;
  const result = await appDataSource.query(
    `
    SELECT
      d.department_id,
      d.department_name,
      d.manager_id,
      d.location_id,
      l.*
    FROM
      departments d 
    RIGHT JOIN
      locations l
    ON
      d.location_id=l.location_id
    ${whereClause};
    `
  );
  return result;
};

const checkExistLocationIdBylocationId = async (locationId) => {
  const [result] = await appDataSource.query(
    `
    SELECT EXISTS(
      SELECT
        location_id
      FROM
        locations
      WHERE
        location_id=?
    ) as checkExistLocation
    `,
    [locationId]
  );
  return !!parseInt(result.checkExistLocation);
};

const getDepartmentById = async (departmentId) => {
  const whereClause = departmentId
    ? `WHERE d.department_id=${departmentId}`
    : ``;
  const result = await appDataSource.query(
    `
    SELECT
      *
    FROM
      departments d
    ${whereClause}
    `
  );
  return result;
};

const checkExistDepartmentByid = async (departmentId) => {
  const [result] = await appDataSource.query(
    `
    SELECT EXISTS(
      SELECT
        department_id
      FROM
        departments
      WHERE
        department_id=?
    ) as checkExistDepartment
    `,
    [departmentId]
  );
  return !!parseInt(result.checkExistDepartment);
};

const getLocationById = async (locationId) => {
  const whereClause = locationId ? `WHERE l.location_id=${locationId}` : ``;
  const result = await appDataSource.query(
    `
    SELECT
      *
    FROM
      locations l
    ${whereClause}
    `
  );
  return result;
};

module.exports = {
  getInfoBylocationId,
  checkExistLocationIdBylocationId,
  getDepartmentById,
  checkExistDepartmentByid,
  getLocationById,
};
