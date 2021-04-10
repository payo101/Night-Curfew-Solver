const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Svhema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer"
    } ,
    cartItems: [
        {
            productID: {type: mongoose.Schema.Types.ObjectId , ref: "PID"},
            quantity: {type: Number , default: 1}
        }
    ]
} , {timestamps: true});

module.exports = mongoose.model('Cart' , cartSchema);