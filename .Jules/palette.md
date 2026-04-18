## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-18 - Custom Input Focus States
**Learning:** When building custom input designs (like search bars with icons inside them) where the inner `<input>` must have `outline-none` to avoid breaking the visual container, the element loses its native keyboard focus indication. This creates a severe accessibility issue where keyboard users cannot see when they are focused on the input.
**Action:** Always apply `focus-within:ring-2` (e.g., `focus-within:outline-none focus-within:ring-2 focus-within:ring-alpine`) to the parent container (like the wrapping `<label>`) when removing the outline from the internal `<input>`. This restores WCAG-compliant focus visibility for keyboard users.
