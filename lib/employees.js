// WHEN I choose to view employees
// THEN I'm shown employee Ids, first names, job titles, departments, salaries, and managers of that employees report to
const db = require("../server");

class Employees {
  // constructor(role, salary, department) {
  //   this.role = role;
  //   this.salary = salary;
  //   this.department = department;
  // }
  // getRole() {
  //   return this.role;
  // }
  // getSalary() {
  //   return this.salary;
  // }
  // getDepartment() {
  //   return this.department;
  // }

  getEmployeesRecords() {
    db.query("SELECT * FROM employee", (err, results) => console.log(results));
  }
  // addEmployees(employees) {
  //   return db.promise().query("INSERT INTO employee", employees);
  // }
}

module.exports = Employees;
