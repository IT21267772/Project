const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

const {retrieveOrders , retrieveSpecificOrder , updateOrder , retrieveSpecificOrderUsinMongo} = require('../controllers/deliverOrderController');


// route for get the all of the orders
router.get("/", protect, admin, retrieveOrders)

// route for get specific order
router.get("/:id", protect, admin, retrieveSpecificOrder)

// route for get specific order
router.get("/mongo/:id", protect, admin, retrieveSpecificOrderUsinMongo)


router.put("/:id", protect, admin, updateOrder)

module.exports = router