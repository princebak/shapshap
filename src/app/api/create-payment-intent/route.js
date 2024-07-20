import currency from "currency.js";
import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51IsqFIHteDFlXfC5zL98LXzjs3bQqVJNAFX28RUQfRb5OI6frnJWTTJu3xfldDcxO9bRdYlMRr4tRdtQeOv9jAhx00TNO6NyO5"
);

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.log("PaymentIntent error", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
