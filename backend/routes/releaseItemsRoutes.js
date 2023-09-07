const express = require("express");
const {
	getSingleReleaseRecord,
    getSingleReleaseRecordUsingMongo,
    getAllReleaseRecords,
    createSingleReleaseRecord,
    updateSingleReleaseRecord,
    deleteSingleReleaseRecord
} = require("../controllers/releaseItemsController");
const {protect, admin} = require('../middleware/authMiddleware');

const router = express.Router();

// get all the items from inventory
router.get("/", protect, admin, getAllReleaseRecords);

// get a single item from inventory
router.get("/:id", protect, admin, getSingleReleaseRecord);

// create a single item
router.post("/", protect, admin, createSingleReleaseRecord);

//update a single item
router.put("/:id", protect, admin, updateSingleReleaseRecord);

// delete a single item
router.delete("/:id", protect, admin, deleteSingleReleaseRecord);

// get single item from mongID
router.get("/mongo/:id", protect, admin, getSingleReleaseRecordUsingMongo);


// exporting the express router
module.exports = router;
