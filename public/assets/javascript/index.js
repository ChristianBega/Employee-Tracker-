const inquirer = require("inquirer");
const Database = require("../../../lib/databaseClass.js");

// Initial prompt function
function init() {
  // Add Department Prompt
  const promptAddDepartment = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the name of the department: ",
          name: "departmentName",
        },
      ])
      .then((res) => {
        Database.addDepartment(res, promptInit);
        // promptInit();
      });
  };
  // Add Role Prompt
  const promptAddRole = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the name of the role: ",
          name: "role",
        },
        {
          type: "input",
          message: "Please enter the salary of the role: ",
          name: "salary",
        },
        {
          type: "input",
          message: "Please enter the department: ",
          name: "department",
        },
      ])
      .then((res) => {
        // Database =
        // pass addRole to addRole method????
        Database.addRoles(res, promptInit);
        // promptInit();
      });
  };
  // Add Department Prompt
  const promptAddEmployee = () => {
    //
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the first name of the employee: ",
          name: "firstName",
        },
        {
          type: "input",
          message: "Please enter the last name of the employee: ",
          name: "lastName",
        },
        {
          type: "input",
          message: "Please enter the role ID:  ",
          name: "role_id",
        },
        {
          type: "input", // list
          message: "Please enter the employees manager: ",
          choices: [],
          name: "manager",
        },
      ])
      .then((res) => {
        // console.log(res);
        Database.addEmployees(res, promptInit);
        // promptInit();
      });
  };
  // Update Employee Prompt
  const promptUpdateEmployee = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter an employee name to update: ",
          name: "firstName",
        },
        {
          type: "input",
          message: "Please update that employees role:  ",
          name: "updatedRole",
        },
      ])
      .then((res) => {
        const updatedEmployee = new Employees(res.firstName, res.updatedRole);
        console.log(updatedEmployee);
        // pass updatedEmployee t0 updateEmployeesRecords???
        updatedEmployee.updateEmployeesRecords();
      });
  };
  // Initial prompt (first to fire)
  const promptInit = () => {
    return inquirer
      .prompt([
        {
          type: "list",
          message: "Please choose an option: ",
          choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
          ],
          name: "optionType",
        },
      ])
      .then((resChoice) => {
        console.log(resChoice);
        switch (resChoice.optionType) {
          case "View all departments":
            Database.getDepartmentsRecords(promptInit);
            break;
          case "View all roles":
            Database.getRolesRecords(promptInit);
            break;
          case "View all employees":
            Database.getEmployeesRecords(promptInit);
            break;
          case "Add a department":
            console.log(resChoice.optionType);
            promptAddDepartment();
            break;
          case "Add a role":
            console.log(resChoice.optionType);
            promptAddRole();
            break;
          case "Add an employee":
            console.log(resChoice.optionType);
            promptAddEmployee();
            break;
          case "Update an employee role":
            console.log(resChoice.optionType);
            promptUpdateEmployee();
            break;
          default:
            console.log("Default case");
        }
      });

    // .then // promise
    // Switch statement to determine next action
    // Ex. case "View all departments" > calls viewDepartments function which handles sql functionality
  };

  promptInit();
}
init();
