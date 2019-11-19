module.exports = {
    bCustomerPurchase: function (choices) {
        return [
            {
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