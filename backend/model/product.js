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
    } ,
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoreID"
    }
} , {timestamps: true} );

const Product = mongoose.model('Product' , productSchema);
module.exports = Product;