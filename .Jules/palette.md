## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-07-04 - Native Select Focus Rings
**Learning:** Native `<select>` elements and custom input wrappers require manual `focus-visible:ring-2 focus-visible:ring-alpine` (and `focus-within:ring-alpine` for wrappers) to maintain consistent keyboard navigation feedback alongside design system components.
**Action:** Always verify that native inputs and custom wrappers have explicit focus ring classes applied.
