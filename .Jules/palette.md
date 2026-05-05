## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-05 - Focus Visibility on Custom Inputs
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>` to remove default browser styling, keyboard focus visibility is lost. This is a critical WCAG violation as keyboard users cannot see where their focus is.
**Action:** Always apply `focus-within:ring-*` (e.g., `focus-within:ring-2`) and `focus-within:outline-none` to the parent container (like a `<label>`) when stripping outlines from an inner input to maintain compliant keyboard focus visibility.
