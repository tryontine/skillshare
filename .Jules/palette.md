## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-19 - Custom Input Focus Visibility Pattern
**Learning:** When building custom inputs that hide the native input element's outline (e.g., using `outline-none`), keyboard focus visibility is lost. Screen reader users and keyboard navigators rely on this visual feedback to know which element is currently focused.
**Action:** Always apply `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine`) and `focus-within:outline-none` to the parent container (like a `<label>`) when using `outline-none` on the inner `<input>` to maintain WCAG-compliant keyboard focus visibility.
