// Import packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Middleware
app.use(cors());             // Allow cross-origin requests (frontend)
app.use(express.json());     // Parse JSON bodies

// Import routes
const expenseRoutes = require("./routes/expenseRoutes");

// Use routes
app.use("/api/expenses", expenseRoutes);

// Root route (test server)
app.get("/", (req, res) => {
  res.send("Expense Tracker API is running");
});

