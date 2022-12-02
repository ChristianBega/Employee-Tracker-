const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // MySQL password
    password: "root",
    database: "employees_db",
  },
  console.log(`Connected to the classlist_db database.`)
);

module.exports = db;
