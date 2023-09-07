const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

// Replace this with your Mongoose product model
const Product = require("../models/productModel");
const Order = require("../models/orderModel");

const { getOrders } = require("../controllers/orderController");

router.get('/', getOrders)

router.get("/generate-orders", async (req, res) => {
  try {
	// const cities = [
	// 	"Colombo", "Sri Jayewardenepura Kotte", "Mount Lavinia", "Ratnapura", "Kandy",
	// 	"Negombo", "Batticaloa", "Trincomalee", "Galle", "Jaffna", "Matara", "Gampaha",
	// 	"Anuradhapura", "Kalutara", "Nuwara Eliya", "Hambantota", "Kegalle", "Kurunegala"
	// ];

	// const cities = [
	// 	"Colombo", "Ratnapura", "Kandy",
	// 	"Negombo", "Galle", "Jaffna", "Matara", "Gampaha",
	// 	"Anuradhapura", "Hambantota", "Kegalle"
	// ];

	// const cities = [
	// 	"Colombo", "Kandy",
	// 	"Galle", "Jaffna", "Matara", "Gampaha",
	// 	"Anuradhapura", "Hambantota",
	// ];

	const cities = [
		"Colombo", "Kandy",
		"Galle", "Jaffna", "Gampaha"
	];

    const getRandomProduct = async () => {
      const count = await Product.countDocuments();
      const randomIndex = Math.floor(Math.random() * count);
      const randomProduct = await Product.findOne().skip(randomIndex);
      return randomProduct;
    };

    const getRandomCity = () => {
      const randomIndex = Math.floor(Math.random() * cities.length);
      return cities[randomIndex];
    };

    const generateRandomDate = (start, end) => {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    const generateRandomOrder = async () => {
      const orderItems = [];
      const itemCount = Math.floor(Math.random() * 3) + 1; // Random number of items in each order (1 to 5)

      let subTotal = 0;

      for (let i = 0; i < itemCount; i++) {
        const product = await getRandomProduct();
        if (!product) {
          console.error("Product not found, skipping order item creation.");
          continue; // Skip this order item if the product is not found
        }

		// Generate a random quantity within the range of 1 to 5
		const minQuantity = 1;
		const maxQuantity = 5;
		const quantity = Math.floor(Math.random() * (maxQuantity - minQuantity + 1)) + minQuantity;
	   

        const orderItem = {
          productId: new mongoose.Types.ObjectId(product._id),
          productName: `${product.brand} ${product.name}`,
          unitPrice: product.price,
          quantity: quantity,
          itemTotal: product.price * quantity,
        };

        subTotal += orderItem.itemTotal;
        orderItems.push(orderItem);
      }

      const shippingInfo = {
        city: getRandomCity(),
      };

      const createdAt = generateRandomDate(new Date('2021-02-01'), new Date());

      const order = new Order({
        subTotal: subTotal,
        tax: Math.round(subTotal * 0.02), // Assuming a 2% tax rate
        shipping: 0, // You can calculate shipping costs here if needed
        total: subTotal + Math.round(subTotal * 0.02),
        orderStatus: "Delivered",
        orderItems: orderItems,
        shippingInfo: shippingInfo,
        createdAt: createdAt,
      });

      return order;
    };

    const insertOrders = async () => {

      try {

        // Generate and insert 30 random orders
        for (let i = 0; i < 40; i++) {
          const order = await generateRandomOrder();
          await order.save();
        }

        console.log("Orders inserted successfully.");
      } catch (error) {
        console.error("Error inserting orders:", error);
        res.status(500).json({ error: "Error inserting orders: " + error.message });
      } finally {
        client.close();
      }
    };

    await insertOrders();

    res.status(200).json({ message: "Random orders generated successfully." });
  } catch (error) {
    console.error("Server error:", error.message);
    res.status(500).json({ error: "Server error: " + error.message });
  }
});

module.exports = router;
