// Project directory location: backend/services/paypalService.js
// File purpose and placement: This file contains the service logic for interacting with the PayPal API.

const paypal = require("@paypal/checkout-server-sdk");

// PayPal environment configuration
let environment = new paypal.core.SandboxEnvironment(
  "YOUR_PAYPAL_CLIENT_ID",
  "YOUR_PAYPAL_CLIENT_SECRET",
);
let client = new paypal.core.PayPalHttpClient(environment);

module.exports = {
  createOrder: async (orderDetails) => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody(orderDetails);

    try {
      const order = await client.execute(request);
      return order.result;
    } catch (error) {
      console.error("Error creating PayPal order: ", error);
      throw error;
    }
  },
  captureOrder: async (orderId) => {
    const request = new paypal.orders.OrdersCaptureRequest(orderId);

    try {
      const capture = await client.execute(request);
      return capture.result;
    } catch (error) {
      console.error("Error capturing PayPal order: ", error);
      throw error;
    }
  },
};
