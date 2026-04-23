const Item = require("../models/Item");

// ADD ITEM
exports.addItem = async (req, res) => {
  try {
    const item = await Item.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category, // ✅ included (safe extension)
      createdBy: req.user.id || req.user._id,
    });

    res.json(item);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ITEMS (SEARCH + CATEGORY FILTER)
exports.getItems = async (req, res) => {
  try {
    const { search, category } = req.query;

    let query = {};

    // 🔍 Search by title
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    // 🏷 Filter by category
    if (category) {
      query.category = category;
    }

    const items = await Item.find(query)
      .populate("createdBy", "name email role")
      .sort({ createdAt: -1 });

    res.json(items);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
