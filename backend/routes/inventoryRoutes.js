const express = require("express");
const {
	getSingleItem,
	getAllItems,
	createSingleItem,
	updateSingleItem,
	deleteSingleItem,
	getSingleItemMongo
} = require("../controllers/inventoryController");
const {protect, admin} = require('../middleware/authMiddleware');

const router = express.Router();

// get all the items from inventory
router.get("/", protect, admin, getAllItems);

// get a single item from inventory
router.get("/:id", protect, admin, getSingleItem);

// create a single item
router.post("/", protect, admin, createSingleItem);

//update a single item
router.put("/:id", protect, admin, updateSingleItem);

// delete a single item
router.delete("/:id", protect, admin, deleteSingleItem);


// get single item from mongID
router.get("/mongo/:id", protect, admin, getSingleItemMongo)


// exporting the express router
module.exports = router;
