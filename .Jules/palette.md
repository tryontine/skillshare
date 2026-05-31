## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-31 - Input Focus Wrappers and Standalone Select Accessibility
**Learning:** Custom input wrappers utilizing `outline-none` on the inner `<input>` lose default browser focus indicators, degrading keyboard navigation. Furthermore, standalone `<select>` elements without visual labels fail screen reader validation.
**Action:** Always apply `focus-within:ring-2 focus-within:outline-none` (plus theme color) to custom input parent wrappers (like `<label>`) to preserve focus visibility. For standalone `<select>` elements, always include a descriptive `aria-label`.
