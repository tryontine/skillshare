import { formatChf } from "@/lib/formatting/currency";

export function CurrencyText({ value }: { value: number }) {
  return <span>{formatChf(value)}</span>;
}
