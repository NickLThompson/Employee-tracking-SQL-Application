INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Finance"),
       (3, "Engineering"),
       (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 64000, 1),
       (2, "Salesperson", 53000, 1),
       (3, "Lead Engineer", 100000, 3),
       (4, "Software Engineer", 92000, 3),
       (5, "Account Manager", 57000, 2),
       (6, "Accountant", 52000, 2),
       (7, "Legal Secretary", 60000, 4),
       (8, "Lawyer", 50000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Cason", "Smith", 1, 1),
       (2, "Max", "Carbon", 1, 1),
       (3, "Bryan", "Tabor", 3, 1),
       (4, "Nickolas", "Thompson", 3, 1),
       (5, "Marissa", "McBride", 2, 1),
       (6, "Elias", "Morgan", 2, 1),
       (7, "Katlynn", "Ennis", 4, 1),
       (8, "Luke", "Hamlyn", 4, 1);
