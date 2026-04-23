const multer = require("multer");
const path = require("path");

// storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() +
        "-" +
        Math.round(Math.random() * 1e9) +
        path.extname(file.originalname),
    );
  },
});

const fileFilter = (req, file, cb) => {
  // allow only basic file types (you can expand later)
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
