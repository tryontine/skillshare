## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Custom Form Control Keyboard Accessibility
**Learning:** Custom form elements (like `div` based inputs or wrapped inputs with `outline-none`) lose native keyboard focus visibility, making it impossible for keyboard users to see which field is active.
**Action:** When building custom inputs that use `outline-none` on the inner `<input>`, apply `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine`) and `focus-within:outline-none` to the parent container (like a `<label>`) to maintain WCAG-compliant keyboard focus visibility. Additionally, ensure adjacent native inputs like `<select>` have matching `focus-visible` styles.
