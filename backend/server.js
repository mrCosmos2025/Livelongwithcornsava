// Location: ecommerce-site/backend/server.js
// Purpose: Entry point for the backend server application

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config");

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Import routes
const productRoutes = require("./routes/products");
const paymentRoutes = require("./routes/payments");

// Use Routes
app.use("/api/products", productRoutes);
app.use("/api/payments", paymentRoutes);

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
