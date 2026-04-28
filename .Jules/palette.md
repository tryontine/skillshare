## 2024-03-24 - Interactive Component Standardization
**Learning:** Raw HTML interactive elements (like `<button>`) were being used alongside design system components (`<Button>`). This creates inconsistent focus-visible states and hover feedback, breaking the unified accessibility experience.
**Action:** Always verify that interactive elements use the design system's primitive components (e.g., `@/components/ui/button`) instead of raw HTML elements to ensure consistent a11y states (like `focus-visible:ring-2`) and keyboard navigation support across the application.

## 2024-04-28 - Composite Input Wrapper Focus Visibility
**Learning:** Custom composite input fields (like the SearchBar) that apply `outline-none` to the inner `<input>` element inadvertently destroy WCAG-compliant keyboard focus visibility if the outer wrapper doesn't provide visual feedback.
**Action:** When building custom inputs that strip native outlines from the inner `<input>`, always apply `focus-within:ring-2 focus-within:ring-alpine` (or equivalent design tokens) to the parent container (like a `<label>`) to maintain clear focus states for keyboard users.
