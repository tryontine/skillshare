## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-04-19 - Focus Management for Custom Inputs
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` element, the keyboard focus indicator is lost. This is a common pattern in the app's custom search bars and form fields.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to the parent container (usually a `<label>` or a wrapper `<div>`) to maintain WCAG-compliant keyboard focus visibility.
