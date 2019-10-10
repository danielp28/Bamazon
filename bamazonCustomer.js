function run() {



    var inquirer = require("inquirer");
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host: "localhost",

        // Your port; if not 3306
        port: 3306,

        // Your username
        user: "root",

        // Your password
        password: "tomsawyer",
        database: "bamazon_db"
    });

    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId + "\n");
    });
    readProducts();
    


    function readProducts() {
        console.log("Selecting all products...\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++)
                console.log("ID: " + res[i].id + " || Name: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: $" + res[i].price + " || Stock: " + res[i].stock_quantity);

            initPrompt();
            
        });
    }

    function initPrompt() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What unit would you like to buy?",
                    name: "userSelection"
                }
            ]).then(answer => {
                var id = parseInt(answer.userSelection)
                console.log(id)
                var query = "SELECT * FROM products WHERE id=" + id;
                connection.query(query, function (err, res) {
                   
                        console.log("You have selected " + res[0].product_name + ", and it costs $" + res[0].price)
                    
                    userPurchase(id);
                })

                



            });

    }

    function userPurchase(id) {
        inquirer
            .prompt([
                {
                    name: "quantity",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])
            .then(quantitySelection => {
                var userQuantity = parseInt(quantitySelection.quantity)
                var query = "SELECT stock_quantity FROM products WHERE id=" + id;
                connection.query(query, function (err, res) {
                    console.log(res[0].stock_quantity)
                    

                        if (userQuantity > res[0].stock_quantity) {
                            console.log("We do not have that many, please try again")
                            run();
                        } else if (userQuantity <= res[0].stock_quantity) {
                            var query = connection.query(
                                "UPDATE products SET ? WHERE ?",
                                [
                                  {
                                    stock_quantity: res[0].stock_quantity - userQuantity
                                  },
                                  {
                                    id: id
                                  }
                                ],
                                function(err, res) {
                                  if (err) throw err;
                                  console.log(res.affectedRows + " products updated!\n");
                                  console.log(query.sql);
                                run();
                            })
                        }
                    


                    
                });
            });
    }
}









run();