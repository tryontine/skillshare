import { NextResponse } from "next/server";
import { stripeConfig } from "@/lib/stripe/config";

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");
  const payload = await request.text();

  if (!stripeConfig.webhookSecret || !signature) {
    return NextResponse.json(
      {
        received: false,
        reason: "Stripe webhook secret or signature is missing.",
      },
      { status: 202 },
    );
  }

  return NextResponse.json({
    received: true,
    bytes: payload.length,
    target: "supabase/functions/v1/stripe-webhook",
  });
}
