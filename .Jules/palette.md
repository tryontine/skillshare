## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-20 - Custom Input Focus Visibility
**Learning:** When using `outline-none` on an inner `<input>` inside a custom wrapper, keyboard users lose visual focus indicators, creating an accessibility failure.
**Action:** Apply `focus-within:ring-2 focus-within:ring-alpine` to the parent container (like a `<label>`) and corresponding `focus-visible:ring-2 focus-visible:ring-alpine focus-visible:outline-none` to adjacent native inputs (like `<select>`) to maintain WCAG-compliant focus visibility.
