## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-06-13 - Focus Visibility on Custom Search Bars
**Learning:** When building custom search inputs that use `outline-none` on the inner `<input>`, keyboard focus indicators are lost unless explicitly handled. Adjacent native elements (like `<select>`) can also have inconsistent focus styles compared to the custom components.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine` to the wrapper `<label>` of custom inputs to maintain WCAG-compliant keyboard focus visibility. Additionally, apply `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine` to adjacent native elements (like `<select>`) to ensure a consistent accessibility experience across the entire component group.
