import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not set in environment variables");
}

// Modern Stripe initialization: use the Node SDK v12+ pattern with explicit API version
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { amount } = req.body as { amount?: number };

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: "Invalid amount" });
  }

  try {
    const origin = req.headers.origin || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: Math.round(amount * 100),
            product_data: {
              name: "Donation to One Voice Foundation Inc.",
            },
          },
        },
      ],
      success_url: `${origin}/donate?status=success`,
      cancel_url: `${origin}/donate?status=cancelled`,
    });

    if (!session.url) {
      console.error("Stripe Checkout Session created without URL", session);
      return res.status(500).json({ error: "Unable to start checkout" });
    }

    return res.status(200).json({ url: session.url });
  } catch (error: any) {
    console.error("Error creating Stripe Checkout Session", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}