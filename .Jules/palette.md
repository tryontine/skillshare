## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-06-02 - Keyboard Focus Rings on Custom Input Wrappers
**Learning:** When inputs use `outline-none` (often done to style the surrounding container rather than the input itself), native focus rings are lost. The `focus-within` pseudo-class is required on the parent container to restore keyboard accessibility visibility.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine` (or the system's primary interactive color) to any container wrapping an `outline-none` input to ensure WCAG-compliant focus visibility.
