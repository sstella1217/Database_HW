# Music Store Database
###### By Stephanie Stella

used bamzon.sql script to create MySql database, a Product Table and added 10 rows of products into the product table.

Created to .js script files one for bamazonCustomer and one for bamazonManager.

Node bamazonCustomer is run and will present the first prompt asking if you are a User or a Manager.

![screen shot 2017-10-22 at 6 34 51 pm](https://user-images.githubusercontent.com/30575480/31894746-e5077afa-b7d4-11e7-89aa-25a579f80398.png)


If user is choosen a list of all the items in the database will be displayed and the user will be prompt to enter the ID of the product they would like to order. 

![screen shot 2017-10-22 at 6 37 26 pm](https://user-images.githubusercontent.com/30575480/31894886-49295ec2-b7d5-11e7-980b-56e28fa7fc59.png)




Once a correct item ID is entered the user is prompted to enter the quantity they would like to order.  After the quanity is entered if the item is in stock a message is displayed that your order has been received and a total of your total order is provided.  The user is then returned to the main screen.  The database is also updated decreasing the stock_quantity by the number ordered.

![screen shot 2017-10-22 at 6 42 00 pm](https://user-images.githubusercontent.com/30575480/31895046-cb2f84e6-b7d5-11e7-95c6-5e17a50d6820.png)


If Admin is choosen the bamazonManager.js is run.  The Admin is given for selections to choose from Prodcuts for Sale, Low Inventory, Add Inventory and Add New Product.

![screen shot 2017-10-23 at 9 43 54 am](https://user-images.githubusercontent.com/30575480/31895438-ca3280d8-b7d6-11e7-82c8-d5087cc9b716.png)



Products for Sale displays a list of items that are currently in the database

![screen shot 2017-10-23 at 9 46 15 am](https://user-images.githubusercontent.com/30575480/31895548-188cdcc4-b7d7-11e7-9afb-ebe727080e09.png)


Low Inventory displays the Items in the database who's quantity is under 5.

![screen shot 2017-10-23 at 9 49 52 am](https://user-images.githubusercontent.com/30575480/31895745-98812a8e-b7d7-11e7-8c9f-e1928f004f8e.png)


Add Inventory allows the admin to update the quantity of items in the database.

![screen shot 2017-10-23 at 10 08 55 am](https://user-images.githubusercontent.com/30575480/31902713-6e539120-b7eb-11e7-8d28-18b82a75fabf.png)

![screen shot 2017-10-23 at 10 09 46 am](https://user-images.githubusercontent.com/30575480/31902788-b6e547c6-b7eb-11e7-9c6d-04569eb0ea63.png)

Add New Product allows the admin to add a new item to the database.

![screen shot 2017-10-23 at 12 16 22 pm](https://user-images.githubusercontent.com/30575480/31902916-1c2943b2-b7ec-11e7-93bb-9816f29c4c40.png)

![screen shot 2017-10-23 at 12 16 40 pm](https://user-images.githubusercontent.com/30575480/31902947-3cce9216-b7ec-11e7-8f81-7c45ed96135d.png)

