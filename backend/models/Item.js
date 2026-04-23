const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    title: String,
    description: String,

    // ✅ ADDED (required for category filtering)
    category: {
      type: String,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Item", itemSchema);
