    DROP DATABASE IF EXISTS bamazon_DB;
    CREATE DATABASE bamazon_DB;
​
    USE bamazon_DB;
​
    CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INT default 0,
    stock_quantity INT default 0,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sunscreen", "cosmetics", 8, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tent", "outdoors", 50, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Granola Bar", "food & drink", 2, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hiking Boots", "shoes", 40, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wind breaker", "clothing", 25, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Bottle", "food & drink", 6, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wool Socks", "clothing", 7, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bug Spray", "outdoors", 6, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hat", "clothing", 10, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jerkey", "food & drink", 5, 30);