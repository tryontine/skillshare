## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Custom Input Focus Rings
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>`, we must apply `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine`) and `focus-within:outline-none` to the parent container (like a `<label>`) to maintain WCAG-compliant keyboard focus visibility. Additionally, adjacent native interactive elements like `<select>` dropdowns must have corresponding `focus-visible:ring-*` classes applied to maintain a consistent accessibility experience across the component.
**Action:** Always verify that focus-within and focus-visible utilities are applied to custom complex form components like SearchBars to ensure they remain accessible via keyboard navigation.
