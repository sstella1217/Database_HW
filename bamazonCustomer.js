var mysql = require("mysql");
var inquirer = require("inquirer");

//Makes Database Connection

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
//  console.log("connected as id " + connection.threadId);
  startCustomer();
 
});

//Prompts for type of user

 function startCustomer() {
      inquirer.prompt([
      {
          type: 'list',
          name: 'choices',
          message: 'Choose an Option:',
          choices:['User', 'Admin']
      }
      ]) .then(function(answer){

            if (answer.choices === 'User'){
              User();
            }
            else if (answer.choices === "Admin"){
              var manager = require("./bamazonManager.js")

             // startManager();
            }
           
      });
  };    

  function User() {
  //Displays items in the datebase

        connection.query("SELECT item_id, product_name, price FROM products", function(err, res) {
              if (err) throw err;
              console.log(res)

        connection.query("SELECT * FROM products", function(err,results) {
              if (err) throw err;
         
          inquirer.prompt([
          {
             name: "item",
             type: "input",
             message: "Enter Order ID?"
           },
           {
             type: "input",
             name: "ordered",
             message: "How many?" 
           }

          ]).then(function(name) {
          //  console.log(name);

            var ordered = parseInt(name.ordered);
            connection.query("SELECT * FROM products WHERE ?", {item_id: name.item}, function(err,results) {
                  if (err) throw err;  

            for (var i = 0; i < results.length; i++) {
                if (results[i].stock_quantity < ordered) {
                  console.log ("Insufficient quantity!")
                }

                else {  
                   console.log("Your order has been received!")
                   var q = (results[i].stock_quantity - ordered);
                   connection.query("UPDATE products SET? WHERE ?",
                    [
                      {
                        stock_quantity: q
                      },
                      {
                        item_id: name.item
                      }

                    ],
                    
                    function(err,res) {

                    }
                   )
                    connection.query("SELECT price FROM products WHERE ?", {item_id: name.item}, function(err,tot){
                      for (var i = 0; i < tot.length; i++){
                        var total = (tot[i].price * ordered);
                        console.log("Your total is: " + total);
                        console.log("---------------------------------");
                        startCustomer();
                    }
                    })

                };
              

             };

            })
            });
          });
       });       

     };
     
 module.exports = startCustomer;