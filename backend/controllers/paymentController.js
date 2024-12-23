// Location: ecommerce-site/backend/controllers/paymentController.js
// Purpose: Controller functions for payment routes

const paypal = require('paypal-rest-sdk');
const axios = require('axios');
const config = require('../config/config');

paypal.configure({
        'mode': 'sandbox', // Sandbox or live
            'client_id': config.paypalClientId,
                'client_secret': config.paypalSecret
});

exports.processPayPalPayment = async (req, res) => {
        const paymentData = req.body;

            const createPaymentJson = {
                        "intent": "sale",
                                "payer": {
                                                "payment_method": "paypal"
                                },
                                        "redirect_urls": {
                                                        "return_url": "http://return.url",
                                                                    "cancel_url": "http://cancel.url"
                                        },
                                                "transactions": [{
                                                                "item_list": {
                                                                                    "items": paymentData.items
                                                                },
                                                                            "amount": {
                                                                                                "currency": "USD",
                                                                                                                "total": paymentData.total
                                                                            },
                                                                                        "description": "This is the payment description."
                                                }]
            };

                paypal.payment.create(createPaymentJson, (error, payment) => {
                            if (error) {
                                            res.status(500).json({ message: error.response });
                            } else {
                                            res.json(payment);
                            }
                });
};

exports.processPaystackPayment = async (req, res) => {
        const paymentData = req.body;

            try {
                        const response = await axios.post('https://api.paystack.co/transaction/initialize', paymentData, {
                                        headers: {
                                                            Authorization: `Bearer ${config.paystackSecretKey}`
                                        }
                        });

                                res.json(response.data);
            } catch (error) {
                        res.status(500).json({ message: error.response.data });
            }
};

            }
                                        }
                        })
            }
}
                            }
                            }
                })
                                                                            }
                                                                }
                                                }]
                                        }
                                }
            }
}
})