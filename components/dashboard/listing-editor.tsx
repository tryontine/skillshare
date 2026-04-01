import { FormField } from "@/components/ui/form-field";
import { Button } from "@/components/ui/button";
import { createListingAction } from "@/app/provider/listings/actions";

export function ListingEditor() {
  return (
    <form action={createListingAction} className="grid gap-4 rounded-[28px] border border-line bg-white/85 p-6">
      <FormField label="Listing title" required>
        <input name="title" defaultValue="Swiss German conversation walks in Zurich" required minLength={8} />
      </FormField>
      <FormField label="Summary" required>
        <textarea
          name="summary"
          defaultValue="Confidence-building guided sessions through Zurich neighborhoods with practical speaking drills."
          rows={4}
          required
          minLength={24}
        />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Price (CHF)" required>
          <input name="priceChf" defaultValue="95" type="number" required min={40} />
        </FormField>
        <FormField label="City" required>
          <input name="city" defaultValue="Zurich" required minLength={2} />
        </FormField>
      </div>
      <Button type="submit" className="w-full sm:w-auto">
        Save listing
      </Button>
    </form>
  );
}
