const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

const viewAllDepartments = () => {
  db.query('SELECT * FROM departments', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
};

const viewAllRoles = () => {
  db.query('SELECT * FROM roles', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
};

const viewAllEmployees = () => {
  db.query('SELECT * FROM employees', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
}

const init = () => {
inquirer.prompt([
  {
    name: "query",
    type: "list",
    message: "What option would you like to select?",
    choices: [
      "View ALL Departments",
      "View ALL Roles",
      "View ALL Employees",
    ]
  }
]).then((answers) => {
  switch(answers.query) {
    case "View ALL Departments": {
      viewAllDepartments();
      break;
    }
    case "View ALL Roles": {
      viewAllRoles();
      break;
    }
    case "View ALL Employees": {
      viewAllEmployees();
      break;
    }
  }
});
};

init();