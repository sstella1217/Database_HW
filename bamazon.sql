DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id INT NOT NULL UNIQUE,
product_name VARCHAR(45) NULL,
department_name VARCHAR(45) NULL,
price INT NULL,
stock_quantity INT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (101, "Drums", "Percussion", 800, 5);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (201, "Electric Guitar", "Strings", 400, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (301, "Clarinet", "Woodwinds", 200, 8);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (401, "Trombone", "Brass", 450, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (402, "Trumpet", "Brass", 375, 2);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (302, "Saxophone", "Woodwinds", 350, 15);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (102, "Xylophone", "Percussion", 425, 3);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (202, "Acoustic Guitar", "Strings", 250, 35);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (203, "Banjo", "Strings", 380, 7);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (303, "Oboe", "Woodwinds", 650, 2);