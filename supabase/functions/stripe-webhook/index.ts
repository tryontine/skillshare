import Stripe from "npm:stripe@14.25.0";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") ?? "";
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});

serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature || !stripeWebhookSecret || !stripeSecretKey) {
    return new Response("Missing Stripe configuration", { status: 400 });
  }

  const body = await request.text();
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
  } catch (error) {
    return new Response(`Invalid signature: ${String(error)}`, { status: 400 });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

  await supabase.from("stripe_events").upsert({
    id: event.id,
    type: event.type,
    livemode: event.livemode,
    payload: event as unknown as Record<string, unknown>,
    processed_at: new Date().toISOString(),
  });

  if (event.type === "charge.succeeded") {
    const charge = event.data.object as Stripe.Charge;

    await supabase.from("charges").upsert({
      stripe_charge_id: charge.id,
      payment_intent_id: typeof charge.payment_intent === "string" ? charge.payment_intent : null,
      amount_chf: charge.amount / 100,
      currency: charge.currency.toUpperCase(),
      status: charge.status,
      created_at: new Date(charge.created * 1000).toISOString(),
    });
  }

  if (event.type === "charge.refunded") {
    const charge = event.data.object as Stripe.Charge;
    const refund = charge.refunds.data[0];

    if (refund) {
      await supabase.from("refunds").upsert({
        stripe_refund_id: refund.id,
        stripe_charge_id: charge.id,
        amount_chf: refund.amount / 100,
        status: refund.status,
        created_at: new Date(refund.created * 1000).toISOString(),
      });
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "content-type": "application/json" },
  });
});
