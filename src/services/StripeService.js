"use server"
const stripe = require("stripe")(
    "sk_test_51IsqFIHteDFlXfC5zL98LXzjs3bQqVJNAFX28RUQfRb5OI6frnJWTTJu3xfldDcxO9bRdYlMRr4tRdtQeOv9jAhx00TNO6NyO5"
  );
  
  export async function createPaymentIntent(amount) {
    try {
  
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      });
      return { clientSecret: paymentIntent.client_secret }
    } catch (error) {
      console.log("PaymentIntent error", error);
      return { error: error.message }
    }
  }
  