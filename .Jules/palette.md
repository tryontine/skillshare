## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-23 - Focus States for Custom Inputs
**Learning:** When creating custom input components where the actual `<input>` element has its native focus outline stripped (e.g., using `outline-none`), keyboard users lose critical visual feedback showing which element has focus.
**Action:** When an inner `<input>` uses `outline-none`, apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to its wrapping parent container (like a `<label>`) to maintain WCAG-compliant keyboard focus visibility.
