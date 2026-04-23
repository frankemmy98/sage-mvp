require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");
const instructorRoutes = require("./routes/instructorRoutes"); // NEW

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/instructor", instructorRoutes); // NEW

// DB
connectDB();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
