DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(60),
department_name VARCHAR(60),
price DECIMAL (20,10),
stock_quantity INT (50) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Computer Desk", "Furniture", 50, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Honda Civic", "Cars", 10000, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ice Cream", "Food", 2.50, 600);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Household Products", 1.75, 10000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plates", "Household Products", 5, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Couch", "Furniture", 100, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hyundai Genesis", "Cars", 15000, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza", "Food", 8.75, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cleaner", "Household Products", 5.50, 8080);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Produce", "Food", 6, 500);

