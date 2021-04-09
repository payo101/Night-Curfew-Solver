const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    } ,
    imgURL: {
        type: String,
    } ,
    description: {
        type: String
    } ,
    price: {
        type: Number
    } ,
    countInStock: {
        type: Number
    }
});

const Product = mongoose.model('Product' , productSchema);
module.exports = Product;