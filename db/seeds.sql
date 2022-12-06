INSERT INTO department (name)
VALUES ("Finance"),
("HR"),
("Marketing"),
("Operations"),
("Engineer");

INSERT INTO roles (title, salary, department_id)
VALUES("Sales Lead", 60000, 1),
("Lead Engineer", 150000, 5),
("Junior Engineer", 65000, 5),
("Account Manager", 62000, 1),
("Legal Team", 55000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("John", "Doe", 2, NULL),
("Jane", "Doe", 4, NULL),
("Jake", "Doe", 5, 2),
("Julian", "Doe", 1, NULL),
("Chris", "Bega",3, 1);