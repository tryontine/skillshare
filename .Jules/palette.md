## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.
## 2024-03-20 - Focus Management for Custom Inputs
**Learning:** When building custom inputs that use `outline-none` on the inner `<input>`, we must apply `focus-within:ring-*` (e.g., `focus-within:ring-2 focus-within:ring-alpine`) to the parent container (like a `<label>`) to maintain WCAG-compliant keyboard focus visibility. The `SearchBar` was missing this, making it invisible to keyboard navigation.
**Action:** Always verify keyboard focus states when removing default browser outlines.
