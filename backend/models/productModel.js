const mongoose = require("mongoose");
const Counter = require('./counterModel');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add product name']
    },
    brand: {
        type: String,
        required: [true, 'Please add product brand']
    },
    category: {
        type: String,
        required: [true, 'Please add category']
    },
    price: {
        type: Number,
        required: [true, 'Please add product price']
    },
    quantity: {
        type: Number,
        required: [true, 'Please add product quantity']
    },
    description: {
        type: String,
        required: [true, 'Please add product description']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
