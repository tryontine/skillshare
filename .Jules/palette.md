## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2024-03-24 - Consistent Focus Rings on Mixed Inputs
**Learning:** When creating custom styled inputs (like a `<label>` wrapping a borderless `<input>`), adjacent native inputs (like `<select>`) must be manually styled with matching focus rings, otherwise the keyboard navigation experience is visually broken.
**Action:** When applying `focus-within:ring-*` to a custom input wrapper, always add matching `focus-visible:ring-* focus-visible:outline-none` utilities to sibling native interactive elements.
