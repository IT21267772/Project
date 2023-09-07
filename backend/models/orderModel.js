const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  subTotal: Number,
  tax: Number,
  shipping: Number,
  total: Number,
  orderStatus: String,
  orderItems: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Assuming you have a Product model
      productName: String,
      unitPrice: Number,
      quantity: Number,
      itemTotal: Number
    }
  ],
  shippingInfo: {
    city: String
    // Add other shipping information fields as needed
  },
  createdAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
