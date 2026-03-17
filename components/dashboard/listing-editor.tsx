import { FormField } from "@/components/ui/form-field";

export function ListingEditor() {
  return (
    <form className="grid gap-4 rounded-[28px] border border-line bg-white/85 p-6">
      <FormField label="Listing title">
        <input defaultValue="Swiss German conversation walks in Zurich" />
      </FormField>
      <FormField label="Summary">
        <textarea
          defaultValue="Confidence-building guided sessions through Zurich neighborhoods with practical speaking drills."
          rows={4}
        />
      </FormField>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="Price (CHF)">
          <input defaultValue="95" type="number" />
        </FormField>
        <FormField label="City">
          <input defaultValue="Zurich" />
        </FormField>
      </div>
      <button
        className="rounded-full bg-alpine px-5 py-3 text-sm font-semibold text-white"
        type="submit"
      >
        Save listing
      </button>
    </form>
  );
}
