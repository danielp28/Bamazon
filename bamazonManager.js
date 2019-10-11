function run() {
    var inquirer = require("inquirer")
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

    function initPrompt() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Hello Mr. Manager, what would you like to do? Type help for commands",
                    name: "initInput"
                }
            ]).then(answer => {
                function switchIt() {
                    switch (answer.initInput) {
                        case "view-inven":
                            viewInventory();
                            break;
                        case "low-inven":
                            lowInventory();
                            break;
                        case "add-inven":
                            addInventory();
                            break;
                        case "add-product":
                            addProduct();
                            break;
                        case "help":
                            help();
                            break;
                        default: console.log("Please choose a valid command");
                            run();
                    }
                };
                switchIt();
            })
    }
    initPrompt();



    function viewInventory() {
        console.log("Selecting all products...\n");
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("ID: " + res[i].id + " || Name: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: $" + res[i].price + " || Stock: " + res[i].stock_quantity);
            }
        });
        run();
    }

    function lowInventory() {
        console.log("Selecting products below 5 in stock...\n");
        var query = "SELECT * FROM products WHERE stock_quantity <= 5"
        connection.query(query, function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {
                console.log("ID: " + res[i].id + " || Name: " + res[i].product_name + " || Department: " + res[i].department_name + " || Price: $" + res[i].price + " || Stock: " + res[i].stock_quantity);
            }
        })
        run();
    }
    function addInventory() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the ID of the product you would like to update?",
                    name: "mangUpdate"
                },
                {
                    type: "input",
                    message: "How many would you like to add?",
                    name: "invenAdd"
                }
            ]).then(answer => {
                var mangUpdate = parseInt(answer.mangUpdate);
                var query = "SELECT * FROM products WHERE id=" + mangUpdate;
                var addInven = parseInt(answer.invenAdd)
                connection.query(query, function (err, res) {
                    if (err) throw err;
                    console.log("You have selected " + res[0].product_name + ", and there are " + res[0].stock_quantity + " in stock")


                    console.log("Updating your selection quantities...\n");
                    var query = connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: res[0].stock_quantity + addInven
                            },
                            {
                                id: mangUpdate
                            }
                        ],
                        function (err, res) {
                            if (err) throw err;
                            console.log(res.affectedRows + " products updated!\n");

                            run();
                        })
                })


            })
    }
}
    
function addProduct() {

}

function help() {
    console.log("You have four options \n 1. Check all products currently in the system with view-inven \n 2. View products with less than 5 in stock with low-inven\n 3. Add more inventory to a specific product with add-inven\n 4. Add a new item to the product list with add-product.")
    run();
}



run();