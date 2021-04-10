const Product = require('../model/product');

//Middlewares
const displayProducts = (req , res) => {
    res.json({
        message: "you are viewing all the products"
    });
}

//Store-Owner Rights
const createProduct = (req , res) => {
    const _Product = new Product({
        name: req.body.name,
        imgURL: req.body.imgURL,
        description: req.body.description
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