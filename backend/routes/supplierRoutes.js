const express = require("express");
const {
	getSingleSupplier,
    getSingleSupplierMongo,
    getAllSuppliers,
    updateSingleSupplier,
    deleteSingleSupplier,
    registerSupplier
} = require("../controllers/supplierController");
const {protect, admin} = require('../middleware/authMiddleware');

const router = express.Router();

// get all the suppliers from the database
router.get("/", protect, admin, getAllSuppliers);

// get a single supplier from the database
router.get("/:id", protect, admin, getSingleSupplier);

// register a suppleir
router.post("/", protect, admin, registerSupplier);

//update a single item
router.put("/:id", protect, admin, updateSingleSupplier);

// delete a single item
router.delete("/:id", protect, admin, deleteSingleSupplier);

// get single item from mongID
router.get("/mongo/:id", protect, admin, getSingleSupplierMongo)


// exporting the express router
module.exports = router;
