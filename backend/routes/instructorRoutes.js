const router = require("express").Router();

const { protect, authorize } = require("../middleware/authMiddleware");
const upload = require("../config/uploadConfig");

const { uploadItem } = require("../controllers/instructorItemController");

// INSTRUCTOR ONLY UPLOAD ROUTE
router.post(
  "/upload",
  protect,
  authorize("instructor"),
  upload.single("file"),
  uploadItem,
);

module.exports = router;
