## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-25 - Custom Input Focus States
**Learning:** Custom input fields that use `outline-none` on the inner `<input>` element often lose default browser focus indicators, breaking keyboard accessibility.
**Action:** Always apply `focus-within:ring-*` and `focus-within:outline-none` to the parent container (like a `<label>`) wrapping the `outline-none` input to maintain WCAG-compliant keyboard focus visibility.
