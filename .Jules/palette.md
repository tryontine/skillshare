## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-03-24 - Custom Input Focus States
**Learning:** Custom input designs often rely on an outer wrapper (like a `<label>`) visually acting as the input, with the inner actual `<input>` having `outline-none`. This causes keyboard users to lose focus visibility when tabbing into the input.
**Action:** When building custom inputs with hidden actual input outlines, apply `focus-within:ring-2 focus-within:ring-alpine focus-within:outline-none` to the parent container to maintain WCAG-compliant keyboard focus visibility.
