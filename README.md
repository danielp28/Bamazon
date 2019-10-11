BAMAZON ONLINE STORE



The Bamazon Online store currently has two different access portals, one for customer interactions and one for managment interactions.
===========================================================================================================================================
CUSTOMER PORTAL

The customer portal on Bamazon has two functions:
1. View all available products
2. Buy a product selected by ID.


<!-- image for list of products-->

After selecting an item from the list, the user is displyed the item they selected and prompted for a quantity to purchase.

<!--image for user quantity selection-->

Once the user has selected their item and the quantity they would like to purchase, the database is checked for product availibility.
If the user has selected a quantity larger than what is in the DB, they will be notified to choose another option.
<!-- image for overpurchase-->
However, if the user quantity is less than what is in the DB, they will be notified that their item has been shipped and the DB quantity is updated.
<!--image for DB update-->


============================================================================================================================================
MANAGER PORTAL

The mangager portal currently has four working functions:
1) view-inven
2) low-inven
3) add-inven
4) help

<!--intial prompt-->

The view-inven function will display all current products in the database
<!--mang read image-->
 

The low-inven function displays all inventory items with a stock count below 5
<!--low-inven image-->

The add-inven function allows the mangager to add inventory to the item of his choice, selected again by item ID in the DB
<!--add-inven images-->

The help function displays all available commands to the user and re-runs the program
<!--help image-->