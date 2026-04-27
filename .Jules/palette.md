## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-10-25 - Custom Input Focus States
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` element (like search bars), the keyboard focus state is completely lost for accessibility.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` (or the equivalent app theme focus ring) to the parent container (e.g., `<label>`) of any `outline-none` custom input to ensure WCAG-compliant keyboard focus visibility is maintained.
