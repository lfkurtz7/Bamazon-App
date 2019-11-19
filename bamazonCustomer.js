var inquirer = require("inquirer");
var connection = require('./utils/connection');
var { bCustomerPurchase } = require('./utils/questions');

displayProducts();

function displayProducts() {
  var sqlQry = `SELECT *
                FROM products`;

  connection.query(sqlQry, function (err, res) {
    if (err) throw err;
    console.table(res);
    chooseProduct(res);
  });
}

function chooseProduct(db) {
  inquirer
    .prompt(bCustomerPurchase(getProductName(db)))
    .then(function ({ product_name, itemQuan }) {
      var item = GetItemByName(product_name, db);
      if(item.stock_quantity > parseInt(itemQuan)){

        console.log("Start Shopping!");
        changeQuantity(parseInt(itemQuan), item.id);
        console.log("Total Price: $" + (itemQuan * item.price).toFixed(2));
      } else {
        console.log('Insufficient quantity! Only %s available!', item.stock_quantity)
        chooseProduct(db);
      }
    })
}
function GetItemByName(name, db){
  for(var i in db){
    if(db[i].product_name === name){
      return db[i]
    }
  }
  return false
}
function getProductName(arr) {
  var idList = [];
  for (var i = 0; i < arr.length; i++) {
    idList.push(arr[i].product_name)
  }
  return idList
}

function changeQuantity(soldAmnt, id) {
  var sqlQry = `UPDATE ??
                SET stock_quantity = stock_quantity - ?
                WHERE id = ?`;
  var data = ["products", soldAmnt, id];

  connection.query(sqlQry, data, function(err, results){
    if(err) throw err;
    displayProducts();
    //connection.end();
  })
}



 

