## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2025-04-05 - Custom Input Focus Visibility
**Learning:** When building custom input components that hide the default browser outline (`outline-none` on the inner `<input>`), keyboard users lose focus visibility if the parent container doesn't provide visual feedback.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine` (or appropriate theme tokens) to the parent container when the inner input uses `outline-none` to maintain WCAG-compliant keyboard focus visibility.
