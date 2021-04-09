const router = require('express').Router();
const { displayProducts } = require('../controller/productController');

router.get("/store" , displayProducts); //Display All the products

module.exports = router;