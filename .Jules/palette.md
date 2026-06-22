## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2026-06-22 - Custom Input Focus States
**Learning:** Custom inputs that apply `outline-none` to the inner input element completely lose keyboard focus visibility, failing WCAG standards.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to the parent container (like a `<label>`) of such inputs, and apply consistent `focus-visible` utility classes to adjacent native interactive elements like `<select>`.
