var mysql = require("mysql");
require('dotenv').config()

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MY_SQL_PASS,
  database: "bamazon_DB"
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;