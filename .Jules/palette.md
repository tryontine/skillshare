## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Focus States on Custom Inputs
**Learning:** When building custom input fields that remove the outline from the inner `<input>` element (e.g., using `outline-none`), keyboard focus visibility is lost if not handled by a parent element.
**Action:** Always apply `focus-within:ring-*` (e.g., `focus-within:ring-2`) and `focus-within:outline-none` to the parent container (such as a `<label>`) when the inner input has its outline removed, ensuring WCAG-compliant keyboard focus visibility.