const Product = require('../model/product');
const path = require('path');

//Middlewares

//display all products
const displayProducts = async (req , res) => {
    try {
        const allProducts = await Product.find({});
        res.send(allProducts);
    } catch (err) {
        res.status(400).json({err});
    }
    // const root = path.join(__dirname , '../../');
    // res.sendFile(path.join(root , 'frontend/html/signup.html'));
}

//Store-Owner Rights to create new products
const createProduct = (req , res) => {
    const{name , imgURL , description , price , countInStock} = req.body;
    const _Product = new Product({
        name: name,
        imgURL: imgURL,
        description: description,
        price: price,
        countInStock: countInStock
    });

    _Product.save((err , Product) => {
        if(err){
            res.status(400).json({error});
        }
        if(Product){
            res.send(Product);
        }
    });
}

//used for finding the full details of the product
const findProductByID = (req , res) => {
    id = req.params.productid;
    if(id)
    {
        Product.findById(id).exec((err , product) => {
            if(err)
            {
                res.status(400).json({err});
            }
            if(product)
            {
                res.send(product);
            }
        });
    }
}

module.exports = {displayProducts , createProduct , findProductByID};