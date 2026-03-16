export const stripeConfig = {
  secretKey: process.env.STRIPE_SECRET_KEY,
  webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  connectClientId: process.env.STRIPE_CONNECT_CLIENT_ID,
  defaultPlatformFeeBps: 1200,
};
