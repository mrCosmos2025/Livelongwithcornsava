// Project directory location: backend/services/paystackService.js
// File purpose and placement: This file contains the service logic for interacting with the Paystack API.

const axios = require("axios");

const paystack = axios.create({
  baseURL: "https://api.paystack.co",
  headers: {
    Authorization: `Bearer YOUR_PAYSTACK_SECRET_KEY`,
    "Content-Type": "application/json",
  },
});

module.exports = {
  initializeTransaction: async (transactionDetails) => {
    try {
      const response = await paystack.post(
        "/transaction/initialize",
        transactionDetails,
      );
      return response.data;
    } catch (error) {
      console.error("Error initializing Paystack transaction: ", error);
      throw error;
    }
  },
  verifyTransaction: async (reference) => {
    try {
      const response = await paystack.get(`/transaction/verify/${reference}`);
      return response.data;
    } catch (error) {
      console.error("Error verifying Paystack transaction: ", error);
      throw error;
    }
  },
};
