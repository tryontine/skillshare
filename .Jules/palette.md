## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-09 - Custom Input Focus States
**Learning:** Using `outline-none` on an `<input>` element inside a custom wrapper container (like a `<label>`) removes native keyboard focus visibility, which is an accessibility violation.
**Action:** Always apply `focus-within:ring-*` and `focus-within:outline-none` utilities to the parent container when the child `<input>` has its outline removed to maintain WCAG-compliant keyboard focus indicators.
