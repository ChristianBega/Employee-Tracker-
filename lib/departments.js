// WHEN I choose view all departments
// THEN I'm shown department names and departments Ids

const db = require("../server");

class Department {
  getDepartmentsRecords() {
    // db.promise().query("");
    return db.query("SELECT * FROM department", (err, results) => console.log(results));
  }
  addDepartment() {}
}

module.exports = Department;
