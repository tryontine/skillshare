## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-04-13 - Custom Input Wrapper Focus Visibility
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>`, the default keyboard focus indicator is lost. This is a common accessibility trap for search bars or compound input components.
**Action:** Apply `focus-within:ring-2` (and typically `focus-within:ring-alpine focus-within:outline-none`) to the parent container (like a `<label>`) to maintain WCAG-compliant keyboard focus visibility when the inner input receives focus.
