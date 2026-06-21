## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Custom Input Accessibility
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` to rely on the parent wrapper for styling, the parent container must include `focus-within:ring-2 focus-within:ring-alpine` and `focus-within:outline-none` to maintain WCAG-compliant keyboard focus visibility.
**Action:** Always apply `focus-within:ring-*` utility classes to parent containers of custom `outline-none` inputs, and ensure adjacent native interactive elements like `<select>` have corresponding `focus-visible:ring-*` applied for a unified experience.
