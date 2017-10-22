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

   startManager();
 
});

//Prompts for type of user

 function startManager() {
      inquirer.prompt([
      {
          type: 'list',
          name: 'choices',
          message: 'Choose an Option:',
          choices:['Products for Sale', 'Low Inventory', 'Add Inventory', 'Add New Product', 'LogOut']
      }
      ]) .then(function(answer){

            if (answer.choices === 'Products for Sale'){
              Sale();
            }
            else if (answer.choices === "Low Inventory"){
              lowInv();
            }
            else if (answer.choices === "Add Inventory"){
              addInv();
            }
            else if (answer.choices === "Add New Product"){
              addProd();
            }
            else if (answer.choices === "LogOut"){
              
            }
      });
  };    

  function Sale() {
  	 connection.query("SELECT item_id, product_name, price, stock_quantity FROM products", function(err, results) {
              if (err) throw err;

              for(var i = 0; i < results.length; i++){
              	console.log(results[i]);
              	console.log("----------------------------------------------------")
              }
              startManager();
  	})
  };

  function lowInv() {
	 connection.query("SELECT item_id, product_name, stock_quantity FROM products WHERE stock_quantity < 5", function(err, results) {
              if (err) throw err;

              for(var i = 0; i < results.length; i++){
              	console.log(results[i]);
              	console.log("-----------------------------------------------------------------------------")
              }
              startManager();
              
    });

  };

  function addInv() {

      inquirer.prompt([
      {
          type: 'text',
          name: 'item',
          message: 'Enter item_id: '
          
      },
      {
          type: 'text',
          name: 'quant',
          message: 'New Amount: '
      }

      ]) .then(function(answer){
            var item = parseInt(answer.item);
            var q = parseInt(answer.quant);       

           connection.query("UPDATE products SET? WHERE ?",
                    [
                      {
                        stock_quantity: q
                      },
                      {
                        item_id: item
                      }

                    ]).then(function(err,res) {

                    })
                   
                  startManager();
        });
  };

    function addProd() {
     
      inquirer.prompt([
      {
        type: 'text',
        name: 'itemNum',
        message: 'Enter new Item ID: '
      },
      {
        type: 'text',
        name: 'prodName',
        message: 'Enter new Product Name: '
      },
      {
        type: 'text',
        name: 'dept',
        message: 'Enter Department Name: '
      },
      {
        type: 'text',
        name: 'price',
        message: 'Enter Price: '
      },
      {
        type: 'text',
        name: 'quan',
        message: 'Enter Quantity in Stock: '
      }

      ]).then(function(prod) {
          var sql = "INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)VALUES ?";
          var values = [
            [prod.itemNum, prod.prodName, prod.dept, prod.price, prod.quan]
           
          ];
          connection.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " product inserted!\n");
            startManager();
           });
            
                        
      // })
    })

    }  

      

     
  module.exports = startManager;