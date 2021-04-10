const router = require('express').Router();
const Product = require('../model/product')
const { displayProducts , createProduct , findProductByID} = require('../controller/productController');

//router.get("/store/display" , displayProducts); //Display All the products
router.post("/store/create" , createProduct); //creates a product (accesible only to store owner account).
router.get("/store/:productid" , findProductByID);//Finds Product on basis of product id.(and display it on another page)

module.exports = router;