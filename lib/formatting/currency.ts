const chfFormatter = new Intl.NumberFormat("en-CH", {
  style: "currency",
  currency: "CHF",
  maximumFractionDigits: 0,
});

export function formatChf(value: number) {
  return chfFormatter.format(value);
}
