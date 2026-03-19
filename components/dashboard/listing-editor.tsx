import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { createListingAction } from "@/app/provider/listings/actions";

export function ListingEditor() {
  return (
    <form action={createListingAction} className="grid gap-4 rounded-[28px] border border-line bg-white/85 p-6">
      <FormField label="Listing title">
        <input name="title" defaultValue="Swiss German conversation walks in Zurich" required minLength={8} />
      </FormField>
      <FormField label="Summary">
        <textarea
          name="summary"
          defaultValue="Confidence-building guided sessions through Zurich neighborhoods with practical speaking drills."
          rows={4}
          required
          minLength={24}
        />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Price (CHF)">
          <input name="priceChf" defaultValue="95" type="number" required min={40} />
        </FormField>
        <FormField label="City">
          <input name="city" defaultValue="Zurich" required minLength={2} />
        </FormField>
      </div>
      <Button
        className="w-full sm:w-auto"
        type="submit"
      >
        Save listing
      </Button>
    </form>
  );
}
