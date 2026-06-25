## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-25 - Custom Input Focus Rings
**Learning:** Custom inputs with internal `outline-none` lose keyboard focus visibility. Adjacent native inputs like `<select>` can have inconsistent focus styles if not explicitly styled.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to custom input wrappers, and `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine` to adjacent native interactive elements to maintain WCAG-compliant, consistent focus visibility across the form.
