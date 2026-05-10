## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-10 - Custom Input Focus States
**Learning:** When building custom inputs that hide the native `<input>` outline (e.g., using `outline-none`), the parent container fails to show focus when the user tabs into it, breaking keyboard navigation visibility.
**Action:** Always apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to the parent container (like a `<label>`) when the inner input has `outline-none`. This ensures WCAG-compliant focus visibility when tabbing.
