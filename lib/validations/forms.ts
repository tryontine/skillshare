import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const bookingRequestSchema = z.object({
  date: z.string().min(1),
  notes: z.string().min(12).max(500),
});

export const listingSchema = z.object({
  title: z.string().min(8),
  summary: z.string().min(24),
  priceChf: z.coerce.number().min(40),
  city: z.string().min(2),
});
