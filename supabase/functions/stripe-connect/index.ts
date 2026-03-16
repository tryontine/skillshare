import Stripe from "npm:stripe@14.25.0";
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") ?? "";
const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-04-10",
});

serve(async (request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { providerId, refreshUrl, returnUrl, email } = await request.json();
  const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

  let stripeAccountId = "";
  const existing = await supabase
    .from("stripe_connected_accounts")
    .select("stripe_account_id")
    .eq("provider_id", providerId)
    .maybeSingle();

  if (existing.data?.stripe_account_id) {
    stripeAccountId = existing.data.stripe_account_id;
  } else {
    const account = await stripe.accounts.create({
      type: "express",
      country: "CH",
      email,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
      business_type: "individual",
    });

    stripeAccountId = account.id;

    await supabase.from("stripe_connected_accounts").upsert({
      provider_id: providerId,
      stripe_account_id: stripeAccountId,
      charges_enabled: account.charges_enabled,
      payouts_enabled: account.payouts_enabled,
    });
  }

  const accountLink = await stripe.accountLinks.create({
    account: stripeAccountId,
    refresh_url: refreshUrl,
    return_url: returnUrl,
    type: "account_onboarding",
  });

  return new Response(JSON.stringify({
    url: accountLink.url,
    stripeAccountId,
  }), {
    headers: { "content-type": "application/json" },
  });
});
