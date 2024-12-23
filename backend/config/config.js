// Location: ecommerce-site/backend/config/config.js
// Purpose: Configuration file for environment variables

module.exports = {
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/ecommerce",
  paypalClientId: process.env.PAYPAL_CLIENT_ID,
  paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
};
