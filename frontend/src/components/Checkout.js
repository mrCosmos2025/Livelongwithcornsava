// Project directory location: frontend/src/components/Checkout.js
// File purpose and placement: This file renders the checkout page and handles payment gateway interactions.

import React, { useState } from "react";
import axios from "axios";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [orderDetails, setOrderDetails] = useState({});

  const handlePayment = async () => {
    try {
      if (paymentMethod === "paypal") {
        const { data } = await axios.post(
          "/api/paypal/create-order",
          orderDetails,
        );
        window.location.href = data.links[1].href; // Redirect to PayPal approval URL
      } else if (paymentMethod === "paystack") {
        const { data } = await axios.post(
          "/api/paystack/initialize-transaction",
          orderDetails,
        );
        window.location.href = data.data.authorization_url; // Redirect to Paystack payment page
      }
    } catch (error) {
      console.error("Payment error: ", error);
      alert("An error occurred while processing your payment.");
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form>
        {/* Add form fields for orderDetails */}
        <label>
          Payment Method:
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="paypal">PayPal</option>
            <option value="paystack">Paystack</option>
          </select>
        </label>
        <button type="button" onClick={handlePayment}>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Checkout;
