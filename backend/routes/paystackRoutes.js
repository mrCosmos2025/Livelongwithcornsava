// Project directory location: backend/routes/paystackRoutes.js
// File purpose and placement: This file defines the API routes for Paystack payment integration.

const express = require("express");
const paystackService = require("../services/paystackService");
const router = express.Router();

router.post("/initialize-transaction", async (req, res) => {
  try {
    const transaction = await paystackService.initializeTransaction(req.body);
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/verify-transaction/:reference", async (req, res) => {
  try {
    const verification = await paystackService.verifyTransaction(
      req.params.reference,
    );
    res.json(verification);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
