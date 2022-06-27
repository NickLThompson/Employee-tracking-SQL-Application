DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30)
);

CREATE TABLE roles (
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    salary DECIMAL(10) NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employees (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);

INSERT INTO departments (id, name)
VALUES (1, "Sales"),
       (2, "Finance"),
       (3, "Engineering"),
       (4, "Legal");

INSERT INTO roles (id, title, salary, department_id)
VALUES (1, "Sales Lead", 64000, 1),
       (2, "Salesperson", 53000, 1),
       (3, "Lead Engineer", 100000, 3),
       (4, "Software Engineer", 92000, 3),
       (5, "Account Manager", 57000, 2),
       (6, "Accountant", 52000, 2),
       (7, "Legal Secretary", 60000, 4),
       (8, "Lawyer", 50000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Cason", "Smith", 1, 1),
       (2, "Max", "Carbon", 1, NULL),
       (3, "Bryan", "Tabor", 3, NULL),
       (4, "Nickolas", "Thompson", 3, 3),
       (5, "Marissa", "McBride", 2, NULL),
       (6, "Elias", "Morgan", 2, 5),
       (7, "Katlynn", "Ennis", 4, 8),
       (8, "Luke", "Hamlyn", 4, NULL);