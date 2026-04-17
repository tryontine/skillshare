## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-18 - Keyboard accessibility focus rings on outline-none inputs
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` to prevent default browser styling inside a custom container, the parent container (like a `<label>`) must use `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none`) to maintain WCAG-compliant keyboard focus visibility.
**Action:** Always verify that interactive elements, especially complex custom input wrappers, properly reflect focus states to the user. Apply `focus-within` styles to the parent wrapper when the input element's outline is removed.
