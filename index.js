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
}

const addDepartment = () => {
  // inquirer.prompt([
  //   {
  //     name: addDept
  //     type: 
  //   }
  // ])
}

const viewAllRoles = () => {
  db.query('SELECT * FROM roles', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
}

const addRole = () => {
  
}

const viewAllEmployees = () => {
  db.query('SELECT * FROM employees', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
}

const addEmployee = () => {
  
}

const exit = () => {
  process.exit();
}


const init = () => {
  inquirer.prompt([
    {
      name: "query",
      type: "list",
      message: "What option would you like to select?",
      choices: [
        "View ALL Departments",
        "Add a Department",
        "View ALL Roles",
        "Add a Role",
        "View ALL Employees",
        "Add an Employee",
        "Update Employee Role",
        "Exit"
      ]
    }
  ]).then((answers) => {
    switch (answers.query) {
      case "View ALL Departments": {
        viewAllDepartments();
        break;
      }
      case "Add a Department": {
        addDepartment();
        break;
      }
      case "View ALL Roles": {
        viewAllRoles();
        break;
      }
      case "Add a Role": {
        addRole();
        break;
      }
      case "View ALL Employees": {
        viewAllEmployees();
        break;
      }
      case "Add an Employee": {
        addEmployee();
        break;
      }
      case "Exit": {
        exit();
        break;
      }
    }
  });
};

init();