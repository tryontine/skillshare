## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Focus Indicators on Custom Inputs
**Learning:** When using `outline-none` on an inner `<input>` element (e.g., for custom styled search bars), native focus rings are lost. Applying `focus-within:ring-2` to the parent container is necessary to maintain WCAG-compliant keyboard focus visibility.
**Action:** Whenever building custom inputs with nested unstyled elements, apply `focus-within:ring-2 focus-within:ring-alpine` to the outer wrapper (`<label>` or `<div>`) to visually communicate focus state consistently.
