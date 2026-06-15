## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Focus Indicators on Custom Wrappers
**Learning:** When custom input wrappers (like a `<label>` containing an inner `<input className="outline-none">`) are used to achieve a specific visual design, keyboard focus indicators are lost, breaking WCAG compliance.
**Action:** Apply `focus-within:ring-*` and `focus-within:outline-none` to the parent container (like `<label>`) of custom inputs, and ensure adjacent native elements (like `<select>`) also receive matching `focus-visible:ring-*` utilities to maintain a unified, accessible keyboard experience.
