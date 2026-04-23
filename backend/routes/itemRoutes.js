const router = require("express").Router();
const { protect, authorize } = require("../middleware/authMiddleware");

const { addItem, getItems } = require("../controllers/itemController");

// PUBLIC
router.get("/", getItems);

// PROTECTED
router.post("/add", protect, authorize("student", "instructor"), addItem);

module.exports = router;
