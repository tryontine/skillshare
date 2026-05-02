## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-05-02 - Custom Input Focus States
**Learning:** Building custom inputs (like wrapping an `<input>` with `outline-none` inside a stylized `<label>`) removes the browser's native focus ring. This breaks keyboard navigation accessibility as users can't see which element has focus.
**Action:** When using `outline-none` on an inner `<input>`, always apply `focus-within:ring-2` (e.g., `focus-within:ring-alpine`) and `focus-within:outline-none` to its parent container to restore clear, WCAG-compliant keyboard focus visibility.
