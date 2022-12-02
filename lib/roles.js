// WHEN I choose to view roles
// THEN I'm shown job title, role Id, the department that role belongs to, and the salary for that role

const db = require("../server");

class Roles {
  getRolesRecords() {
    db.query("SELECT * FROM roles", (err, results) => console.log(results));
  }
  addRoles() {}
}

module.exports = Roles;
