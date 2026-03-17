"use server";
import { redirect } from "next/navigation";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createListingAction(formData: FormData) {
  const title = formData.get("title")?.toString();
  const summary = formData.get("summary")?.toString();
  const priceChf = formData.get("priceChf")?.toString();
  const city = formData.get("city")?.toString();

  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return redirect("/auth/sign-in");
  }

  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    return redirect("/auth/sign-in");
  }

  if (!title || !summary || !priceChf || !city) {
    return redirect("/provider/listings/new?error=Missing required fields");
  }

  // Fetch default category
  const { data: categories } = await supabase
    .from("categories")
    .select("id")
    .limit(1);

  // Use generic types to avoid TypeScript 'any' restrictions and missing types issues
  const categoryId = (categories && categories.length > 0 && typeof categories[0] === 'object' && categories[0] !== null && 'id' in categories[0] ? String((categories[0] as Record<string, unknown>).id) : "721a6c42-bb9a-412f-9b63-8f0a0ea5c107");

  // Insert service
  const servicePayload = {
    provider_id: session.user.id,
    category_id: categoryId,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''),
    title,
    summary,
    booking_mode: "hybrid" as const,
    is_published: true,
  };

  const { data: service, error: serviceError } = await supabase
    .from("services")
    .insert(servicePayload as never)
    .select()
    .single();

  if (serviceError || !service) {
    return redirect(`/provider/listings/new?error=${serviceError?.message || "Failed to create service"}`);
  }

  const serviceId = (service as unknown as { id: string }).id;

  // Insert service location
  const locationPayload = {
    service_id: serviceId,
    canton: "Zurich", // Default
    city,
    venue_label: "City Center", // Default
    lat: 47.3769, // Default Zurich lat
    lng: 8.5417, // Default Zurich lng
  };

  const { error: locationError } = await supabase
    .from("service_locations")
    .insert(locationPayload as never);

  if (locationError) {
    return redirect(`/provider/listings/new?error=${locationError.message}`);
  }

  // Insert service pricing
  const pricingPayload = {
    service_id: serviceId,
    price_chf: parseFloat(priceChf),
    duration_minutes: 60, // Default
  };

  const { error: pricingError } = await supabase
    .from("service_pricing")
    .insert(pricingPayload as never);

  if (pricingError) {
    return redirect(`/provider/listings/new?error=${pricingError.message}`);
  }

  revalidatePath("/provider/listings");
  return redirect("/provider/listings?message=Listing created successfully");
}
