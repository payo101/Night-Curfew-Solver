const router = require('express').Router();
const Product = require('../model/product')
const { displayProducts , createProduct , findProductByID} = require('../controller/productController');

router.get("/display" , displayProducts); //Display All the products
router.post("/create" , createProduct); //creates a product (accesible only to store owner account).
router.get("/:productid" , findProductByID);//Finds Product on basis of product id.(and display it on another page)

module.exports = router;