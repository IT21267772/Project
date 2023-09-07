const express = require("express");
const router = express.Router();
const { protect, admin } = require("../middleware/authMiddleware");

const {
	createNewDriver,
	getAllDrivers,
	getSingleDriver,
	deleteDriver,
	updateDriverDetails,
	UpdateDriverDetailsUsingMongo,
	FindDriverDetailsUsingMongo
} = require("../controllers/driverController");

// route for the get all drivers
router.get("/", protect, admin, getAllDrivers);

// route for the get a single driver
router.get("/:id", protect, admin, getSingleDriver);

// router for the create a driver
router.post("/", protect, admin, createNewDriver);

// route for the update details of a driver
router.put("/:id", protect, admin, updateDriverDetails);

// route for the get details of a driver using mongo
router.get("/mongo/:id", protect, admin, FindDriverDetailsUsingMongo);

// route for the update details of a driver
router.put("/mongo/:id", protect, admin, UpdateDriverDetailsUsingMongo);

// route for the delete details of the driver
router.delete("/:id", protect, admin, deleteDriver);

module.exports = router;
