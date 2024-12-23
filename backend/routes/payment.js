// Location: ecommerce-site/backend/routes/payments.js
// Purpose: Payment-related routes

const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/paypal", paymentController.processPayPalPayment);
router.post("/paystack", paymentController.processPaystackPayment);

module.exports = router;
