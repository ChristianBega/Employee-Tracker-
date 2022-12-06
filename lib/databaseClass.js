// WHEN I choose to view roles
// THEN I'm shown job title, role Id, the department that role belongs to, and the salary for that role

require("console.table");
const db = require("../server");

// rename
// constructor - pass db = this.db = db
class Database {
  constructor(db) {
    this.db = db;
  }

  // ROLES ::
  getRolesRecords(cb) {
    db.promise()
      .query(
        "SELECT roles.id, roles.title, roles.salary, department.name AS 'department_name' FROM roles LEFT JOIN department ON department.id = roles.department_id;"
      )
      .then(([rows]) => {
        console.table("\n", rows);
        cb();
      });
  }
  addRoles(res, cb) {
    db.promise()
      .query(`INSERT INTO roles(title, salary, department_id) VALUES('${res.role}', ${res.salary},${res.department})`)
      .then((data) => {
        cb();
      });
  }
  // EMPLOYEES ::
  getEmployeesRecords(cb) {
    db.promise()

      .query(
        "SELECT employee.id, CONCAT (employee.first_name, ' ', employee.last_name) AS name, roles.title, department.name AS department, roles.salary, CONCAT (manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;"
      )
      .then(([rows]) => {
        console.table("\n", rows);
        cb();
      });
  }
  addEmployees(res, cb) {
    db.promise()
      .query(
        `INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES('${res.firstName}', '${res.lastName}',${res.role_id}, ${res.manager})`
      )
      .then((data) => {
        cb();
      });
  }
  updateEmployeesRecords() {
    console.log("Employee Updated");
  }
  // DEPARTMENTS ::
  getDepartmentsRecords(cb) {
    console.log("");
    db.promise()
      .query("SELECT * FROM department")
      .then(([rows]) => {
        console.table("\n", rows);
        cb();
      });
  }
  addDepartment(res, cb) {
    console.log(res);
    db.promise()
      .query(`INSERT INTO department(name) VALUES('${res.departmentName}')`)
      .then((data) => {
        cb();
      });
  }
}

module.exports = new Database(db);
