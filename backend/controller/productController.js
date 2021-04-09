const Product = require('../model/product');

//Middlewares
const displayProducts = (req , res) => {
    res.json({
        message: "you are viewing all the products"
    });
}

const createProduct = (req , res) => {
    res.json({
        message: "successfuly created and stored a product"
    });
}

module.exports = {displayProducts , createProduct};