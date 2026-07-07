## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2024-06-15 - Custom Input Focus Rings
**Learning:** When using custom input wrappers (e.g., a styled `<label>` containing an unstyled `<input>`), the native input's `outline-none` removes keyboard focus visibility, creating an accessibility dead zone.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine` to the wrapper element and `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-alpine` to adjacent native inputs (like `<select>`) to restore a consistent, unified focus indicator.
