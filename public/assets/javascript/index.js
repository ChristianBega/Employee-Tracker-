const inquirer = require("inquirer");
const Department = require("../../../lib/departments");
const Roles = require("../../../lib/roles");
const Employees = require("../../../lib/employees.js");
// console.log(Employees);
// Import classes later !!
// const  =

// const Employees = require("./lib/employee.js");

const employees = [];

function init() {
  const promptAddDepartment = () => {
    return inquirer.prompt([
      {
        type: "input",
        message: "Please enter the name of the department: ",
        name: "departmentName",
      },
    ]);
  };
  const promptAddRole = () => {
    return inquirer
      .prompt([
        {
          type: "input",
          message: "Please enter the name of role: ",
          name: "role",
        },
        {
          type: "input",
          message: "Please enter the salary of role: ",
          name: "salary",
        },
        {
          type: "input",
          message: "Please enter the department: ",
          name: "department",
        },
      ])
      .then((res) => {
        const EmployeeEl = new Employees(res.role, res.salary, res.department);
        employees.push(EmployeeEl);
      });
  };
  // const promptAddEmployee = () => {};

  // const promptUpdateEmployee = () => {};

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
            console.log(resChoice.optionType);
            // call my department class
            const getRecords = new Department();
            getRecords.getDepartmentsRecords();
            promptInit();
            break;
          case "View all roles":
            console.log(resChoice.optionType);
            const getRoles = new Roles();
            getRoles.getRolesRecords();
            break;
          case "View all employees":
            console.log(resChoice.optionType);
            const getEmployees = new Employees();
            getEmployees.getEmployeesRecords();
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
  // WHEN I choose to add a department
  // THEN I am prompted to Enter : Name of department > Then add that department to the DB

  // WHEN I choose to add a role
  // THEN I am prompted to Enter : name, salary, and department for the role > THEN add that role to the DB

  // WHEN I Choose to add an employee
  // THEN I am prompted to Enter : first name, last name, and manager > THEN add that role to the DB

  // WHEN I choose to update an employee
  // THEN I am prompted to select an Employee to update : new role

  promptInit();
}
init();
