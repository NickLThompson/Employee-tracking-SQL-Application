// bringing in requirements
const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

// connecting index.js to mySQL
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);


// view all departments
const viewAllDepartments = () => {
  db.query('SELECT * FROM departments', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
}

// add a new department
const addDepartment = () => {
  inquirer.prompt([
    {
      name: "addDept",
      type: "input",
      message: "What department would you like to add?",
      validate: addDept => {
        if (addDept) {
          return true;
        }
      }
    }
  ])
  .then(answer => {
    const params = [answer.id, answer.name]

    const sql = `INSERT INTO departments (name) VALUES (?);`
      db.query(sql, answer.addDept, (err, result) => {
        if (err) throw err;
        console.log("Added " + answer.addDept, + " to departments")
        // const newDept = answer.addDept
        // params.push(addDept)
      })
  })
}

// view all roles
const viewAllRoles = () => {
  db.query('SELECT * FROM roles', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
}

// add a new role
const addRole = () => {
  inquirer.prompt([
    {
      name: "addRole",
      type: "input",
      message: "What role would you like to add?",
      validate: addNewRole => {
        if (addNewRole) {
          return true;
        } else {
          console.log("Please enter a role")
          return false;
        }
      }
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary of this position?",
      validate: addSalary => {
        if ((addSalary)) {
          return true;
        } else {
          console.log("Please enter a valid salary");
          return false;
        }
      }
    }
  ])
  // taking in the parameters and inputing it through mySQL
  .then (answer => {
    const params = [answer.role, answer.salary];

    const roleSQL = `SELECT name, id FROM departments`;

    db.query(roleSQL, (err, data) => {
      if (err) throw err;

      const roleDepartment = data.map(({ name, id }) => ({ name: name, value: id }));

      inquirer.prompt([
        {
          name: "roleDepartment",
          type: "list",
          message: "What department is this role in?",
          choices: roleDepartment
        }
      ])
      // taking the params from above and pushing it into the table
      .then (departmentChoice => {
        const department = departmentChoice.dept;
        params.push(department)

        const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;

        db.query(sql, params, (err, result) => {
          if (err) throw err;
          console.log("Added" + answer.role + " to roles")

          viewAllRoles();
        })
      })
    })
  })
}

const viewAllEmployees = () => {
  db.query('SELECT * FROM employees', function (err, results) {
    if (err) return console.error(err);
    console.table(results);
    return init();
  });
}

// adding a new employee
const addEmployee = () => {
  // grabbing the first and last name
  inquirer.prompt([
    {
      name: "firstname",
      type: "input",
      message: "What is the employee's first name?",
      validate: addFirstName => {
        if (addFirstName) {
          return true;
        } else {
          console.log("Please enter the employee's first name");
          return false;
        }
      } 
    },
    {
      name: "lastname",
      type: "input",
      message: "What is the employee's last name?",
      validate: addLastName => {
        if (addLastName) {
          return true;
        } else {
          console.log("Please enter the employee's last name");
          return false;
        }
      } 
    },
  ])
  // inputting the employee's first and last name
  .then (answer => {
    const params = [answer.addFirstName, answer.addLastName];

    const roleSQL = `SELECT roles.id, roles.title FROM roles`;

    db.query(roleSQL, (err, data) => {
      if (err) throw err;

      const roles = data.map(({ id, title }) => ({ name: title, value: id }));

      inquirer.prompt([
        {
          name: "role",
          type: "list",
          message: "What is the employee's role?",
          choices: roles
        }
      ])
      .then(employeeRole => {
        const role = employeeRole.role;
        params.push(role);

        const mySQL = `INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)`;

        db.query(mySQL, params, (err, result) => {
          if (err) throw err;
          console.log("Employee has been added");


        })
      })
    })
  })
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