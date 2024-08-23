import { NextResponse } from "next/server";
import { createPaymentIntent } from "services/StripeService";

export async function POST(request) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await createPaymentIntent(amount);
    if (paymentIntent.error) {
      throw Error(paymentIntent.error);
    } else {
      return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    }
  } catch (error) {
    console.log("PaymentIntent error", error);
    return NextResponse.json({ error: "Internal server error" });
  }
}
