const Item = require("../models/Item");

// INSTRUCTOR UPLOAD ITEM
exports.uploadItem = async (req, res) => {
  try {
    const { title, description } = req.body;

    const item = await Item.create({
      title,
      description,
      fileUrl: req.file ? req.file.path : "",
      createdBy: req.user.id,
    });

    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
