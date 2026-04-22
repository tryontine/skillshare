## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-22 - Custom Borderless Input Focus States
**Learning:** Using `outline-none` on an `<input>` element inside a custom `<label>` wrapper creates a completely inaccessible keyboard focus state if the wrapper doesn't provide visual feedback.
**Action:** Always apply `focus-within:outline-none focus-within:ring-2 focus-within:ring-*` to the parent container (like a `<label>`) when building custom inputs that strip outline from the inner `<input>`, ensuring WCAG-compliant keyboard focus visibility.
