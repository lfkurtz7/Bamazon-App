module.exports = {
    bCustomerPurchase: function (choices) {
        return [
            {
                // name: "itemID",
                // type: "input",
                // message: "Enter the ID of the item you would like to purchase",
                // validate: function(val){
                //   return idList.indexOf(parseInt(val)) > -1;
                // }
                name: "product_name",
                message: 'Choose product',
                type: 'list',
                choices: choices
            },
            {
                name: "itemQuan",
                type: "input",
                message: "How many would you like?",
                validate: function (val) {
                    return !isNaN(val)
                }
            }
        ]
    }
}