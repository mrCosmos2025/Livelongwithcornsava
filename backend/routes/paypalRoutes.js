// Project directory location: backend/routes/paypalRoutes.js
// File purpose and placement: This file defines the API routes for PayPal payment integration.

const express = require("express");
const paypalService = require("../services/paypalService");
const router = express.Router();

router.post("/create-order", async (req, res) => {
  try {
    const order = await paypalService.createOrder(req.body);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/capture-order", async (req, res) => {
  try {
    const capture = await paypalService.captureOrder(req.body.orderId);
    res.json(capture);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
