## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-06-07 - Custom Input Focus Rings
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>`, `focus-within:ring-*` and `focus-within:outline-none` must be applied to the parent container (like a `<label>`) to maintain WCAG-compliant keyboard focus visibility. Additionally, adjacent native interactive tags (like `<select>`) need corresponding `focus-visible:ring-*` and `focus-visible:outline-none` utility classes to maintain a consistent accessibility experience.
**Action:** Always apply `focus-within` to wrappers of custom inputs and `focus-visible` to adjacent native interactive elements to ensure a unified accessibility experience.
