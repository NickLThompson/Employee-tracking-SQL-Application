DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR (30)
);

CREATE TABLE roles (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR (30) NOT NULL,
    `salary` DECIMAL(10) NOT NULL,
    `department_id` INT NOT NULL
);

CREATE TABLE employees (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `role_id` INT NOT NULL,
    `manager_id` INT
);

INSERT INTO departments (`name`)
VALUES ("Sales"),
       ("Finance"),
       ("Engineering"),
       ("Legal");

INSERT INTO roles (`title`, `salary`, `department_id`)
VALUES ("Sales Lead", 64000, 1),
       ("Salesperson", 53000, 1),
       ("Lead Engineer", 100000, 3),
       ("Software Engineer", 92000, 3),
       ("Account Manager", 57000, 2),
       ("Accountant", 52000, 2),
       ("Legal Secretary", 60000, 4),
       ("Lawyer", 50000, 4);

INSERT INTO employees (`first_name`, `last_name`, `role_id`, `manager_id`)
VALUES ("Cason", "Smith", 1, 1),
       ("Max", "Carbon", 1, NULL),
       ("Bryan", "Tabor", 3, NULL),
       ("Nickolas", "Thompson", 3, 3),
       ("Marissa", "McBride", 2, NULL),
       ("Elias", "Morgan", 2, 5),
       ("Katlynn", "Ennis", 4, 8),
       ("Luke", "Hamlyn", 4, NULL);