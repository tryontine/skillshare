## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Focus Visibility on Custom Inputs
**Learning:** Custom input fields that use a wrapper element (like a `<label>`) and strip native focus styles from the inner `<input>` (e.g., using `outline-none`) inadvertently break WCAG keyboard accessibility if the wrapper doesn't explicitly handle focus states.
**Action:** When building custom inputs that use `outline-none` on the inner `<input>`, always apply `focus-within:ring-*` (e.g., `focus-within:ring-2`) and `focus-within:outline-none` to the parent container to maintain compliant and visible keyboard focus indicators.
