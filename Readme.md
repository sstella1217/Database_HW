# Music Store Database
###### By Stephanie Stella

used bamzon.sql script to create MySql database, a Product Table and added 10 rows of products into the product table.

Created to .js script files one for bamazonCustomer and one for bamazonManager.

Node bamazonCustomer is run and will present the first prompt asking if you are a User or a Manager.

If user is choosen a list of all the items in the database will be displayed and the user will be prompt to enter the ID of the product they would like to order. Once a correct item ID is entered the user is prompted to enter the quantity they would like to order.  After the quanity is entered if the item is in stock a message is displayed that your order has been received and a total of your total order is provided.  The user is then returned to the main screen.  The database is also updated decreasing the stock_quantity by the number ordered.


If Admin is choosen the bamazonManager.js is run.  The Admin is given for selections to choose from Prodcuts for Sale, Low Inventory, Add Inventory and Add New Product.

Products for Sale displays a list of items that are currently in the database

Low Inventory displays the Items in the database who's quantity is under 5.

Add Inventory allows the admin to update the quantity of items in the database.

Add New Product allows the admin to add a new item to the database.
